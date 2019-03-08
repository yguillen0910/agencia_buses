<template>
  <div class="container">
    <Header></Header>
    <h2 class="mt-5 text-center">Trayectos</h2>
    <b-button class="mt-5" :to="{name : 'vistaAgregarTrayecto'}">Agregar Trayecto</b-button>
    <Table v-bind:data="trayectos" v-bind:fields="fields"></Table>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Table from "@/components/Table.vue";

import { mapState } from "vuex";
export default {
  name: "trayecto",
  components: {
    Header,
    Table
  },
  mounted() {
    this.$store.dispatch("obtenerTrayectos");
  },
  data() {
    return {
      fields: {
        Nombre: {
          label: "Trayecto",
          sortable: true
        },
        CiudadSalida: {
          label: "Ciudad Salida",
          sortable: true
        },
        CiudadDestino: {
          label: "Ciudad Destino",
          sortable: true
        },
        Promedio: {
          label: "Promedio de Pasajeros",
          sortable: true
        },
        Opciones: { label: "Opciones", sortable: false }
      }
    };
  },
  computed: {
    ...mapState(["trayectos"])
  }
};
</script>