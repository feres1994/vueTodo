<script>
   import {mapActions} from 'vuex'
    export default {
        name:'AddTodos',
        data(){
           return {
                title: ''
           }
        },
        methods:{
            ...mapActions(['addTodo'])
        }
        
    }
</script>
<template>
    <div>
       <input type="text" v-model="title">
       <button @click="addTodo(title)">add todos</button>
    </div>
</template>



<style lang="scss" scoped>

</style>