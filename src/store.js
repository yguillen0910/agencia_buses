import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    trayectos: [],
    choferes: [],
    trayecto: {
      Nombre: '',
      CiudadSalida: '',
      CiudadDestino: ''
    }
  },
  getters: {
    trayectos: state => state.trayectos,
    choferes: state => state.choferes
  },
  mutations: {
    llenarTrayectos (state, trayectoAccion) {
      state.trayectos = trayectoAccion
    },
    crearTrayecto (state, trayectoObject) {
      state.trayectos.push(trayectoObject)
    },
    borrarTrayecto (state) {
      state.nuevoTrayecto = ''
    },
    llenarChoferes (state, choferAccion) {
      state.choferes = choferAccion
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
    },
    agregarTrayecto ({ commit, state }) {
      if (!state.trayecto) {
        return
      }
      axios.post('http://localhost:8000/trayectos/', state.trayecto).then(_ => {
        commit('crearTrayecto', state.trayecto)
      })
    },
    eliminarTrayecto ({ commit }) {
      commit('borrarTrayecto')
    },
    obtenerChoferes ({ commit }) {
      axios
        .get('http://localhost:8000/choferes/')
        .then(r => r.data)
        .then(choferes => {
          commit('llenarChoferes', choferes)
        })
    }
  }
})
