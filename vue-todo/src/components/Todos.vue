<template>
    <div>
        <AddTodos />
        <FilterTodos />
        <h3>todos llist</h3>
        <div class="todos">
          <div v-for="todo in getAllTodos" :key="todo.id" class="todo">
             <div>{{todo.title}}</div>
             <div class="delete-box" @click="deleteTodo(todo.id)">x</div>
          </div>
        </div>
    </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
import AddTodos from './AddTodos.vue'
import FilterTodos from './filterTodos.vue'
    export default {
        name:'todos',
        components:{
            AddTodos,
            FilterTodos

        },
        methods:{
            ...mapActions(['fetchTodos','deleteTodo'])
        },
        computed: {
            ...mapGetters(['getAllTodos'])
        },
        created(){
            this.fetchTodos()
        }
    }
</script>

<style  scoped>
.todos{
    display:flex;
    flex-wrap: wrap;

}
.todo{
    color:white;
    background: red;
    border-radius: 7px;
    padding: 7px;
    width: 100px;
    height: 40px;
    margin: 15px;
    display: flex;
}
.delete-box{
    color:black;
    border:solid
}
</style>