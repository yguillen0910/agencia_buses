<template>
  <div class="container">
    <Header></Header>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";

export default {
  name: "home",
  components: {
    Header
  }
};
</script>
