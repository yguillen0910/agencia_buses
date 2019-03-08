<template>
  <div class="mt-5">
    <b-table class="mt-5 text-center" bordered striped hover :items="data" :fields="fields">
      <template slot="Opciones" slot-scope="row">
        <b-button
          variant="ligth"
          class="mr-3"
          :to="{name : 'vistaAgregarTrayecto'}"
          v-bind:url="row.item.url"
          :disabled="true"
        >
          <i class="fas fa-edit"></i>
        </b-button>
        <b-button variant="ligth" @click="eliminarObjeto(row.item.url)">
          <i class="fas fa-trash-alt"></i>
        </b-button>
      </template>
    </b-table>
  </div>
</template>


<script>
import { mapActions } from "vuex";
export default {
  name: "Table",
  props: {
    data: {
      type: Array
    },
    fields: {
      type: Object
    }
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["eliminarObjeto"])
  }
};
</script>
