<template>
  <div>
    <b-table striped hover :items="trayectos" :fields="fields"/>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Table",
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
