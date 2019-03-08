<template>
  <div class="container">
    <h1 class="mt-5">Crear Chofer</h1>
    <template>
      <div class="mt-5">
        <b-form v-if="show">
          <b-form-group id="ejemploPNombreChofer" label="Primer Nombre:" label-for="PrimerNombre">
            <b-form-input id="PrimerNombre" type="text" v-model="chofer.PrimerNombre" required/>
          </b-form-group>

          <b-form-group id="ejemploSNombreChofer" label="Segundo Nombre:" label-for="SegundoNombre">
            <b-form-input id="SegundoNombre" type="text" v-model="chofer.SegundoNombre" required/>
          </b-form-group>

          <b-form-group
            id="ejemploPApellidoChofer"
            label="Apellido Paterno:"
            label-for="ApellidoPaterno"
          >
            <b-form-input
              id="ApellidoPaterno"
              type="text"
              v-model="chofer.ApellidoPaterno"
              required
            />
          </b-form-group>

          <b-form-group
            id="ejemploMApellidoChofer"
            label="Apellido Materno:"
            label-for="ApellidoMaterno"
          >
            <b-form-input
              id="ApellidoMaterno"
              type="text"
              v-model="chofer.ApellidoMaterno"
              required
            />
          </b-form-group>

          <b-form-group id="ejemploRUT" label="RUT:" label-for="RUT">
            <b-form-input id="RUT" type="number" v-model="chofer.RUT" required/>
          </b-form-group>

          <!-- <b-form-group id="exampleInputGroup3" label="Food:" label-for="exampleInput3">
            <b-form-select id="exampleInput3" :options="foods" required v-model="chofer.food"/>
          </b-form-group>-->
          <b-button class="mt-5" @click="agregarChofer()">Guardar</b-button>
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
  name: "agregarChofer",
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
    ...mapState(["chofer"])
  },
  methods: {
    ...mapActions(["agregarChofer"])
  }
};
</script>