<template>
  <div class="container">
    <h1 class="mt-5">Crear Horario</h1>
    <template>
      <div class="mt-5">
        <b-form v-if="show">
          <b-form-group id="ejemploHoraInicio" label="Hora Inicio:" label-for="HoraInicio">
            <b-form-input id="HoraInicio" type="time" v-model="horario.HoraInicio" required/>
          </b-form-group>
          <b-form-group id="ejemploHoraFin" label="Hora Fin:" label-for="HoraFin">
            <b-form-input id="HoraFin" type="time" v-model="horario.HoraFin" required/>
          </b-form-group>
          <b-form-group id="ejemploTrayecto" label="Seleccione Trayecto:" label-for="Trayecto">
            <b-form-select id="Trayecto" type="text" v-model="horario.Trayecto" required>
              <option
                v-for="option in trayectos"
                v-bind:value="option.url"
                :key="option.url"
              >{{ option.Nombre }} , [{{ option.CiudadSalida }} - {{ option.CiudadDestino }}]</option>
            </b-form-select>
          </b-form-group>
          <b-form-group id="ejemploBus" label="Seleccione Bus:" label-for="Bus">
            <b-form-select id="Bus" type="text" v-model="horario.Bus" required>
              <option
                v-for="option in buses"
                v-bind:value="option.url"
                :key="option.url"
              >{{ option.Placa }}</option>
            </b-form-select>
          </b-form-group>
          <b-button class="mt-5" @click="agregarHorario()">Guardar</b-button>
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
  name: "agregarHorario",
  components: {
    Header
  },
  mounted() {
    this.$store.dispatch("obtenerTrayectos");
    this.$store.dispatch("obtenerBuses");
  },
  data() {
    return {
      show: true
    };
  },
  computed: {
    ...mapState(["horario", "trayectos", "buses"])
  },
  methods: {
    ...mapActions(["agregarHorario"])
  }
};
</script>