<template>
  <div class="container">
    <Header></Header>
    <h2 class="mt-5 text-center">Buses</h2>
    <b-button class="mt-5" :to="{name : 'vistaAgregarBus'}">Agregar Bus</b-button>
    <Table v-bind:data="buses" v-bind:fields="fields"></Table>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Table from "@/components/Table.vue";

import { mapState } from "vuex";
export default {
  name: "bus",
  components: {
    Header,
    Table
  },
  mounted() {
    this.$store.dispatch("obtenerBuses");
  },
  data() {
    return {
      fields: {
        Placa: {
          label: "Placa",
          sortable: true
        },
        Chofer: {
          label: "Chofer",
          sortable: true
        },
        Capacidad: {
          label: "Capacidad",
          sortable: true
        },
        PorcentajeVendido: {
          label: "% de Boletos Vendidos",
          sortable: true
        },
        Opciones: { label: "Opciones", sortable: false }
      }
    };
  },
  computed: {
    ...mapState(["buses"])
  }
};
</script>