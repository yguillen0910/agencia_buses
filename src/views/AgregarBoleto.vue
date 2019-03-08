<template>
  <div class="container">
    <h1 class="mt-5">Crear Boleto</h1>
    <template>
      <div class="mt-5">
        <b-form v-if="show">
          <b-form-group id="ejemploFechaBoleto" label="Fecha:" label-for="Fecha">
            <b-form-input id="Fecha" type="date" v-model="boleto.Fecha" required/>
          </b-form-group>
          <b-form-group id="ejemploPasajero" label="Seleccione Pasajero:" label-for="Pasajero">
            <b-form-select id="Pasajero" type="text" v-model="boleto.Pasajero" required>
              <option
                v-for="option in pasajeros"
                v-bind:value="option.url"
                :key="option.url"
              >{{ option.RUT }} - {{ option.PrimerNombre }} , {{ option.ApellidoPaterno }}</option>
            </b-form-select>
          </b-form-group>
          <b-form-group id="ejemploBus" label="Seleccione Bus:" label-for="Bus">
            <b-form-select id="Bus" type="text" v-model="boleto.Bus" required>
              <option
                v-for="option in buses"
                v-bind:value="option.url"
                :key="option.url"
              >{{ option.Placa }}</option>
            </b-form-select>
          </b-form-group>
          <b-button class="mt-5" @click="agregarBoleto()">Guardar</b-button>
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
  name: "agregarBoleto",
  components: {
    Header
  },
  mounted() {
    this.$store.dispatch("obtenerPasajeros");
    this.$store.dispatch("obtenerBuses");
  },
  data() {
    return {
      show: true
    };
  },
  computed: {
    ...mapState(["boleto", "buses", "pasajeros"])
  },
  methods: {
    ...mapActions(["agregarBoleto"])
  }
};
</script>