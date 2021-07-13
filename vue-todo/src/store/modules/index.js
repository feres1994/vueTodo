import axios from 'axios'

const state = {
    todos : []
}
const getters = {
    getAllTodos:(state) => state.todos,

}

const actions = {
    async fetchTodos({commit}){
        const responce = await axios.get('https://jsonplaceholder.typicode.com/todos')
        commit('setTodos',responce.data)
    },
    async addTodo({commit},title){
        const responce = await axios.post('https://jsonplaceholder.typicode.com/todos',{
            title,
            completed:false
        })
        commit('newTodo',responce.data)
    },
  async deleteTodo({commit},id){
 await axios.delete('https://jsonplaceholder.typicode.com/todos/' + id)
 commit('deleteTodo',id)
  },
  async filterTodos({commit},e){
      const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText)
      const responce = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit='+ limit )
      commit('setTodos',responce.data)
     }  

}

const mutations = {
   setTodos : (state,todos) => state.todos = todos,
   newTodo: (state,todo) => state.todos.unshift(todo),
   deleteTodo: (state,id) => state.todos = state.todos.filter(el => el.id !== id)

}

export default {
    state,
    getters,
    actions,
    mutations
}