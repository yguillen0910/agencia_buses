<template>
  <div class="mt-5">
    <b-table class="mt-5" bordered striped hover :items="data" :fields="fields"/>
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
