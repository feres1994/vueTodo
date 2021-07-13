import Vue from "vue";
import Vuex from "vuex";
import todos from './modules/index.js'
Vue.use(Vuex);

export default new Vuex.Store({
  
  modules: {
    todos
  },
});
