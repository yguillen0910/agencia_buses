import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

import router from "@/router.js";

export default new Vuex.Store({
  state: {
    trayectos: [],
    choferes: [],
    pasajeros: [],
    buses: [],
    boletos: [],
    horarios: [],
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
    boleto: {
      Fecha: '',
      Pasajero: '',
      Bus: ''
    },
    horario: {
      HoraInicio: '',
      HoraFin: '',
      Trayecto: '',
      Bus: ''
    },
    bus: {
      Placa: '',
      Chofer: '',
      Capacidad: ''
    },
    excluirTrayecto: ''
  },
  getters: {
    trayectos: state => state.trayectos,
    choferes: state => state.choferes,
    pasajeros: state => state.pasajeros,
    buses: state => state.buses,
    horarios: state => state.horarios,
    boletos: status => state.boletos
  },
  mutations: {
    llenarTrayectos(state, trayectoAccion) {
      state.trayectos = trayectoAccion
    },
    crearTrayecto(state, trayectoObject) {
      state.trayectos.push(trayectoObject)
    },
    borrarTrayecto(state) {
      state.nuevoTrayecto = ''
    },
    llenarChoferes(state, choferAccion) {
      state.choferes = choferAccion
    },
    crearChofer(state, trayectoObject) {
      state.choferes.push(trayectoObject)
    },
    llenarPasajeros(state, trayectoAccion) {
      state.pasajeros = trayectoAccion
    },
    crearPasajero(state, trayectoObject) {
      state.pasajeros.push(trayectoObject)
    },
    llenarBuses(state, busAccion) {
      state.buses = busAccion
    },
    crearBus(state, busObject) {
      state.buses.push(busObject)
    },
    llenarBoletos(state, busAccion) {
      state.boletos = busAccion
    },
    crearBoleto(state, busObject) {
      state.boletos.push(busObject)
    },
    llenarHorarios(state, busAccion) {
      state.horarios = busAccion
    },
    crearHorario(state, busObject) {
      state.horarios.push(busObject)
    }
  },
  actions: {
    obtenerTrayectos({ commit }) {
      axios
        .get('http://localhost:8000/trayectos/')
        .then(r => r.data)
        .then(trayectos => {
          commit('llenarTrayectos', trayectos)
        })
    },
    agregarTrayecto({ commit, state }) {
      if (!state.trayecto) {
        return
      }
      axios.post('http://localhost:8000/trayectos/', state.trayecto).then(_ => {
        commit('crearTrayecto', state.trayecto),
          router.go(-1)
      })

    },
    eliminarObjeto({ commit }, url) {
      axios.delete(url).then(_ => {
        router.go(0)
      })
    },
    actualizarTrayecto({ commit, state }, url) {
      axios.put(url, state.trayecto).then(_ => {
        console.log('Actualizado')
      })
    },
    obtenerChoferes({ commit }) {
      axios
        .get('http://localhost:8000/choferes/')
        .then(r => r.data)
        .then(choferes => {
          commit('llenarChoferes', choferes)
        })
    },
    agregarChofer({ commit, state }) {
      console.log(state)
      if (!state.chofer) {
        return
      }
      axios.post('http://localhost:8000/choferes/', state.chofer).then(_ => {
        commit('crearChofer', state.chofer),
          router.go(-1)
      })
    },
    obtenerPasajeros({ commit }) {
      axios
        .get('http://localhost:8000/pasajeros/')
        .then(r => r.data)
        .then(pasajeros => {
          commit('llenarPasajeros', pasajeros)
        })
    },
    agregarPasajero({ commit, state }) {
      console.log(state)
      if (!state.pasajero) {
        return
      }
      axios.post('http://localhost:8000/pasajeros/', state.pasajero).then(_ => {
        commit('crearPasajero', state.pasajero),
          router.go(-1)
      })
    },
    obtenerBuses({ commit }) {
      axios
        .get('http://localhost:8000/buses/')
        .then(r => r.data)
        .then(buses => {
          commit('llenarBuses', buses)
        })
    },
    agregarBus({ commit, state }) {
      console.log(state)
      if (!state.bus) {
        return
      }
      axios.post('http://localhost:8000/buses/', state.bus).then(_ => {
        commit('crearBus', state.bus),
          router.go(-1)
      })
    },
    obtenerHorarios({ commit }) {
      axios
        .get('http://localhost:8000/horarios/')
        .then(r => r.data)
        .then(horarios => {
          commit('llenarHorarios', horarios)
        })
    },
    agregarHorario({ commit, state }) {
      console.log(state)
      if (!state.horario) {
        return
      }
      axios.post('http://localhost:8000/horarios/', state.horario).then(_ => {
        commit('crearHorario', state.horario),
          router.go(-1)
      })
    },
    obtenerBoletos({ commit }) {
      axios
        .get('http://localhost:8000/boletos/')
        .then(r => r.data)
        .then(boletos => {
          commit('llenarBoletos', boletos)
        })
    },
    agregarBoleto({ commit, state }) {
      console.log(state)
      if (!state.boleto) {
        return
      }
      axios.post('http://localhost:8000/boletos/', state.boleto).then(_ => {
        commit('crearBoleto', state.boleto),
          router.go(-1)
      })
    },
    volver() {
      router.go(-1)
    }
  }
})
