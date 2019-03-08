<template>
  <div class="container">
    <h1 class="mt-5">Crear Bus</h1>
    <template>
      <div class="mt-5">
        <b-form v-if="show">
          <b-form-group id="ejemploPlacaBus" label="Placa:" label-for="Placa">
            <b-form-input id="Placa" type="number" v-model="bus.Placa" required/>
          </b-form-group>

          <b-form-group id="ejemploChoferBus" label="Seleccione Chofer:" label-for="Chofer">
            <b-form-input id="Chofer" type="text" v-model="bus.Chofer" required/>
          </b-form-group>
          <b-form-group id="ejemploCapacidad" label="Cantidad:" label-for="Capacidad">
            <b-form-input id="Capacidad" type="number" v-model="bus.Capacidad" required/>
          </b-form-group>
          <!-- <b-form-group id="exampleInputGroup3" label="Food:" label-for="exampleInput3">
            <b-form-select id="exampleInput3" :options="foods" required v-model="bus.food"/>
          </b-form-group>-->
          <b-button class="mt-5" @click="agregarBus()">Guardar</b-button>
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
  name: "agregarBus",
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
    ...mapState(["bus"])
  },
  methods: {
    ...mapActions(["agregarBus"])
  }
};
</script>