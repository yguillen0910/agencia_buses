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
    pasajeros: [],
    buses: [],
    trayecto: {
      Nombre: '',
      CiudadSalida: '',
      CiudadDestino: ''
    },
    chofer: {
      PrimerNombre: '',
      SegundoNombre: '',
      ApellidoPaterno: '',
      ApellidoMaterno: '',
      RUT: ''
    },
    pasajero: {
      PrimerNombre: '',
      SegundoNombre: '',
      ApellidoPaterno: '',
      ApellidoMaterno: '',
      RUT: '',
      Sexo: ''
    },
    bus: {
      Placa: '',
      Chofer: '',
      Capacidad: '',
      PorcentajeVendido: ''
    },
    excluirTrayecto: ''
  },
  getters: {
    trayectos: state => state.trayectos,
    choferes: state => state.choferes,
    pasajeros: state => state.pasajeros,
    buses: state => state.buses
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
    },
    crearChofer (state, trayectoObject) {
      state.choferes.push(trayectoObject)
    },
    llenarPasajeros (state, trayectoAccion) {
      state.pasajeros = trayectoAccion
    },
    crearPasajero (state, trayectoObject) {
      state.pasajeros.push(trayectoObject)
    },
    llenarBuses (state, busAccion) {
      state.buses = busAccion
    },
    crearBus (state, busObject) {
      state.buses.push(busObject)
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
    eliminarObjeto ({ commit }, url) {
      axios.delete(url).then(_ => {
        commit('borrarTrayecto')
      })
    },
    actualizarTrayecto ({ commit, state }, url) {
      axios.put(url, state.trayecto).then(_ => {
        console.log('Actualizado')
      })
    },
    obtenerChoferes ({ commit }) {
      axios
        .get('http://localhost:8000/choferes/')
        .then(r => r.data)
        .then(choferes => {
          commit('llenarChoferes', choferes)
        })
    },
    agregarChofer ({ commit, state }) {
      console.log(state)
      if (!state.chofer) {
        return
      }
      axios.post('http://localhost:8000/choferes/', state.chofer).then(_ => {
        commit('crearChofer', state.chofer)
      })
    },
    obtenerPasajeros ({ commit }) {
      axios
        .get('http://localhost:8000/pasajeros/')
        .then(r => r.data)
        .then(pasajeros => {
          commit('llenarPasajeros', pasajeros)
        })
    },
    agregarPasajero ({ commit, state }) {
      console.log(state)
      if (!state.pasajero) {
        return
      }
      axios.post('http://localhost:8000/pasajeros/', state.pasajero).then(_ => {
        commit('crearPasajero', state.pasajero)
      })
    },
    obtenerBuses ({ commit }) {
      axios
        .get('http://localhost:8000/buses/')
        .then(r => r.data)
        .then(buses => {
          commit('llenarBuses', buses)
        })
    },
    agregarBus ({ commit, state }) {
      console.log(state)
      if (!state.bus) {
        return
      }
      axios.post('http://localhost:8000/buses/', state.bus).then(_ => {
        commit('crearBus', state.bus)
      })
    }
  }
})
