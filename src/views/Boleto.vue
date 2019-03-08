<template>
  <div class="container">
    <Header></Header>
    <h2 class="mt-5 text-center">Boletos</h2>
    <b-button class="mt-5" :to="{name : 'vistaAgregarBoleto'}">Agregar Boleto</b-button>
    <Table v-bind:data="boletos" v-bind:fields="fields"></Table>
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
    this.$store.dispatch("obtenerBoletos");
  },
  data() {
    return {
      fields: {
        Fecha: {
          label: "Fecha ",
          sortable: true
        },
        Pasajero: {
          label: "Pasajero",
          sortable: true
        },
        Bus: {
          label: "Bus",
          sortable: true
        },
        Opciones: { label: "Opciones", sortable: false }
      }
    };
  },
  computed: {
    ...mapState(["boletos"])
  }
};
</script>