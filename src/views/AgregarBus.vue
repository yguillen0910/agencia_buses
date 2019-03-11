<template>
  <div class="container">
    <h1 class="mt-5">Crear Bus</h1>
    <template>
      <div class="mt-5">
        <b-form v-if="show">
          <b-form-group id="ejemploPlacaBus" label="Placa:" label-for="Placa">
            <b-form-input id="Placa" type="text" v-model="bus.Placa" required/>
          </b-form-group>
          <b-form-group id="ejemploCapacidad" label="Capacidad:" label-for="Capacidad">
            <b-form-input
              id="Capacidad"
              type="number"
              v-model="bus.Capacidad"
              :state="validarCapacidad"
            />
            <b-form-invalid-feedback
              :state="validarCapacidad"
            >La capacidad del autobus no debe ser distinta de 10.</b-form-invalid-feedback>
            <b-form-valid-feedback :state="validarCapacidad">Perfecto!</b-form-valid-feedback>
          </b-form-group>
          <b-form-group id="ejemploChoferBus" label="Seleccione Chofer:" label-for="Chofer">
            <b-form-select id="Chofer" type="text" v-model="bus.Chofer" required>
              <option
                v-for="option in choferes"
                v-bind:value="option.url"
                :key="option.url"
              >{{ option.PrimerNombre }} {{ option.SegundoNombre }} , {{ option.ApellidoPaterno }} {{ option.ApellidoMaterno }}</option>
            </b-form-select>
          </b-form-group>
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
  mounted() {
    this.$store.dispatch("obtenerChoferes");
  },
  data() {
    return {
      show: true
    };
  },
  computed: {
    ...mapState(["bus", "choferes"]),
    validarCapacidad() {
      return this.bus.Capacidad == 10;
    }
  },
  methods: {
    ...mapActions(["agregarBus"])
  }
};
</script>