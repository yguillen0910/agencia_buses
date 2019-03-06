<template>
  <div class="container">
    <Header></Header>
    <Table></Table>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Table from "@/components/Table.vue";

export default {
  name: "trayecto",
  components: {
    Header,
    Table
  }
};
</script>