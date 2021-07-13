<template>
  <div>
      <h3>filter todos </h3>
    <select name="" id="" @change="filterTodos($event)">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
    </select>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    methods:{
        ...mapActions(['filterTodos'])
    }
};
</script>

<style lang="scss" scoped>
</style>