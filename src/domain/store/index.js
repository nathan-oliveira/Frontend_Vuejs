import Vue from "vue"
import Vuex from "vuex"

import { actionUsuario, mutationUsuario, stateUsuario } from './usuario';
import { actionAlertas, mutationAlertas, stateAlertas } from './alertas'

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    ...stateUsuario,
    ...stateAlertas,
  },
  mutations: {
    ...mutationUsuario,
    ...mutationAlertas,
  },
  actions: {
    ...actionUsuario,
    ...actionAlertas,
  },
  modules: {
  },
});
