import Vue from "vue";
import Vuex from "vuex";
import features from "./modules/features";
import webapi from "./modules/webapi";
import readerSettings from "./modules/webapi";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { features, webapi, readerSettings }
});
