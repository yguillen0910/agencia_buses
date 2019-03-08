<template>
  <div class="container">
    <Header></Header>
    <h2 class="mt-5 text-center">Horarios</h2>
    <b-button class="mt-5" :to="{name : 'vistaAgregarHorario'}">Agregar Horario</b-button>
    <Table v-bind:data="horarios" v-bind:fields="fields"></Table>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Table from "@/components/Table.vue";

import { mapState } from "vuex";
export default {
  name: "horario",
  components: {
    Header,
    Table
  },
  mounted() {
    this.$store.dispatch("obtenerHorarios");
  },
  data() {
    return {
      fields: {
        HoraInicio: {
          label: "Hora Inicio",
          sortable: true
        },
        HoraFin: {
          label: "Hora Fin",
          sortable: true
        },
        Trayecto: {
          label: "Trayecto",
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
    ...mapState(["horarios"])
  }
};
</script>