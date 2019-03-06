<template>
  <div>
    <b-table striped hover :items="trayectos" :fields="fields"/>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: {
    trayectos: {
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
