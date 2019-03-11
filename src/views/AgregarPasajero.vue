<template>
  <div class="container">
    <h1 class="mt-5">Crear Pasajero</h1>
    <template>
      <div class="mt-5">
        <b-form v-if="show">
          <b-form-group id="ejemploPNombrePasajero" label="Primer Nombre:" label-for="PrimerNombre">
            <b-form-input id="PrimerNombre" type="text" v-model="pasajero.PrimerNombre" required/>
          </b-form-group>

          <b-form-group
            id="ejemploSNombrePasajero"
            label="Segundo Nombre:"
            label-for="SegundoNombre"
          >
            <b-form-input id="SegundoNombre" type="text" v-model="pasajero.SegundoNombre" required/>
          </b-form-group>

          <b-form-group
            id="ejemploPApellidoPasajero"
            label="Apellido Paterno:"
            label-for="ApellidoPaterno"
          >
            <b-form-input
              id="ApellidoPaterno"
              type="text"
              v-model="pasajero.ApellidoPaterno"
              required
            />
          </b-form-group>

          <b-form-group
            id="ejemploMApellidoPasajero"
            label="Apellido Materno:"
            label-for="ApellidoMaterno"
          >
            <b-form-input
              id="ApellidoMaterno"
              type="text"
              v-model="pasajero.ApellidoMaterno"
              required
            />
          </b-form-group>

          <b-form-group id="ejemploRUT" label="RUT:" label-for="RUT">
            <b-form-input id="RUT" type="text" v-model="pasajero.RUT" required/>
          </b-form-group>

          <b-form-group id="ejemploSexo" label="Sexo:" label-for="Sexo">
            <b-form-select id="Sexo" type="text" v-model="pasajero.Sexo" required>
              <option :value="F" :key="F">{{ "F" }}</option>
              <option :value="M" :key="M">{{ "M" }}</option>
            </b-form-select>
          </b-form-group>
          <b-button class="mt-5" @click="agregarPasajero()">Guardar</b-button>
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
  name: "agregarPasajero",
  components: {
    Header
  },
  data() {
    return {
      show: true
    };
  },
  computed: {
    ...mapState(["pasajero"])
  },
  methods: {
    ...mapActions(["agregarPasajero"])
  }
};
</script>