import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //s数据仓库，数据来源
    count: 0,
  },

  mutations: {
    //修改数据
    changeData(state, data) {
      state[data[0]] = data[1];
    },
  },

  actions: {},

  getters: {
    //computed 派生
  },

  modules: {},
});
