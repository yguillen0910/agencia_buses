<template>
  <div class="container">
    <Header></Header>
    <h2 class="mt-5 text-center">Pasajeros</h2>
    <b-button class="mt-5" :to="{name : 'vistaAgregarPasajero'}">Agregar Pasajero</b-button>
    <Table v-bind:data="pasajeros" v-bind:fields="fields"></Table>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Table from "@/components/Table.vue";

import { mapState, mapActions } from "vuex";
export default {
  name: "pasajero",
  components: {
    Header,
    Table
  },
  mounted() {
    this.$store.dispatch("obtenerPasajeros");
  },
  data() {
    return {
      fields: {
        PrimerNombre: {
          label: "Primer Nombre",
          sortable: true
        },
        SegundoNombre: {
          label: "Ciudad Salida",
          sortable: true
        },
        ApellidoPaterno: {
          label: "Segundo Nombre",
          sortable: true
        },
        ApellidoMaterno: {
          label: "ApellidoMaterno",
          sortable: true
        },
        RUT: {
          label: "RUT",
          sortable: true
        },
        Sexo: {
          label: "Sexo",
          sortable: true
        },
        Opciones: { label: "Opciones", sortable: false }
      }
    };
  },
  computed: {
    ...mapState(["pasajeros", "nuevoPasajero"])
  },
  methods: {
    ...mapActions(["agregarPasajero"])
  }
};
</script>