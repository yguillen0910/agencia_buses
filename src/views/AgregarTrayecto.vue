<template>
  <div class="container">
    <h1 class="mt-5">Crear Trayecto</h1>
    <template>
      <div class="mt-5">
        <b-form v-if="show">
          <b-form-group
            id="ejemploNombreTrayecto"
            label="Nombre de trayecto:"
            label-for="nombreTrayecto"
          >
            <b-form-input id="nombreTrayecto" type="text" v-model="trayecto.Nombre" required/>
          </b-form-group>

          <b-form-group id="ejemploCiudadSalida" label="Ciudad Salida:" label-for="CiudadSalida">
            <b-form-input id="CiudadSalida" type="text" v-model="trayecto.CiudadSalida" required/>
          </b-form-group>
          <b-form-group id="ejemploCiudadDestino" label="Ciudad Destino:" label-for="CiudadDestino">
            <b-form-input id="CiudadDestino" type="text" v-model="trayecto.CiudadDestino" required/>
          </b-form-group>
          <!-- <b-form-group id="exampleInputGroup3" label="Food:" label-for="exampleInput3">
            <b-form-select id="exampleInput3" :options="foods" required v-model="trayecto.food"/>
          </b-form-group>-->
          <b-button class="mt-5" @click="agregarTrayecto()">Guardar</b-button>
        </b-form>
      </div>
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";

import { mapState, mapActions } from "vuex";
export default {
  name: "agregarTrayecto",
  components: {
    Header
  },
  data() {
    return {
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn"
      ],
      show: true
    };
  },
  computed: {
    ...mapState(["trayecto"])
  },
  methods: {
    ...mapActions(["agregarTrayecto"])
  }
};
</script>