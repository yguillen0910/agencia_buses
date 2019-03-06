<template>
  <div class="container">
    <Header></Header>
    <Table v-bind:trayectos="trayectos" v-bind:fields="fields"></Table>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Table from "@/components/Table.vue";

import { mapState, mapActions } from "vuex";
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
        }
      }
    };
  },
  computed: {
    ...mapState(["trayectos"])
  }
};
</script>