<template>
  <div class="container">
    <Header></Header>
    <h2 class="mt-5 text-center">Choferes</h2>
    <b-button class="mt-5" :to="{name : 'vistaAgregarChofer'}">Agregar Chofer</b-button>
    <Table v-bind:data="choferes" v-bind:fields="fields"></Table>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Table from "@/components/Table.vue";

import { mapState, mapActions } from "vuex";
export default {
  name: "chofer",
  components: {
    Header,
    Table
  },
  mounted() {
    this.$store.dispatch("obtenerChoferes");
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
        Opciones: { label: "Opciones", sortable: false }
      }
    };
  },
  computed: {
    ...mapState(["choferes", "nuevoChofer"])
  },
  methods: {
    ...mapActions(["agregarChofer"])
  }
};
</script>