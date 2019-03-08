import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/About.vue')
    },
    {
      path: '/trayectos',
      name: 'trayectos',
      component: () => import('./views/Trayecto.vue')
    },
    {
      path: '/choferes',
      name: 'choferes',
      component: () => import('./views/Chofer.vue')
    },
    {
      path: '/buses',
      name: 'buses',
      component: () => import('./views/Bus.vue')
    },
    {
      path: '/pasajeros',
      name: 'pasajeros',
      component: () => import('./views/Pasajero.vue')
    },
    {
      path: '/trayectos/agregar_trayecto',
      name: 'vistaAgregarTrayecto',
      component: () => import('./views/AgregarTrayecto.vue')
    },
    {
      path: '/choferes/agregar_chofer',
      name: 'vistaAgregarChofer',
      component: () => import('./views/AgregarChofer.vue')
    },
    {
      path: '/buses/agregar_bus',
      name: 'vistaAgregarBus',
      component: () => import('./views/AgregarBus.vue')
    },
    {
      path: '/pasajeros/agregar_pasajero',
      name: 'vistaAgregarPasajero',
      component: () => import('./views/AgregarPasajero.vue')
    },
    {
      path: '/boletos',
      name: 'boletos',
      component: () => import('./views/Boleto.vue')
    },
    {
      path: '/horarios',
      name: 'horarios',
      component: () => import('./views/Horario.vue')
    },
    {
      path: '/boletos/agregar_boleto',
      name: 'vistaAgregarBoleto',
      component: () => import('./views/AgregarBoleto.vue')
    },
    {
      path: '/horarios/agregar_horario',
      name: 'vistaAgregarHorario',
      component: () => import('./views/AgregarHorario.vue')
    }
  ]
})
