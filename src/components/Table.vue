<template>
  <div class="mt-5">
    <b-table class="mt-5 text-center" bordered striped hover :items="data" :fields="fields">
      <template slot="Opciones">
        <b-button variant="ligth" class="mr-3">
          <i class="fas fa-edit"></i>
        </b-button>
        <b-button variant="ligth">
          <i class="fas fa-trash-alt"></i>
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
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
  }
};
</script>
