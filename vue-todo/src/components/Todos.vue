<template>
    <div>
        <AddTodos />
        <h3>todos llist</h3>
        <div class="todos">
          <div v-for="todo in getAllTodos" :key="todo.id" class="todo">
             <div>{{todo.title}}</div>
             <div class="delete-box">x</div>
          </div>
        </div>
    </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
import AddTodos from './AddTodos.vue'
    export default {
        name:'todos',
        components:{
            AddTodos
        },
        methods:{
            ...mapActions(['fetchTodos'])
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
}
.delete-box{
    color:black
}
</style>