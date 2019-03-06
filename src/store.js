import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    trayectos: []
  },
  mutations: {
    llenarTrayectos (state, trayectoAccion) {
      state.trayectos = trayectoAccion
    }
  },
  actions: {
    obtenerTrayectos ({ commit }) {
      axios
        .get('http://localhost:8000/trayectos/')
        .then(r => r.data)
        .then(trayectos => {
          commit('llenarTrayectos', trayectos)
        })
    }
  }
})
