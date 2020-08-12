<template>
  <div>
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

import { mapState } from "vuex";

export default {
  components: {
    Navbar,
  },
  data() {
    return {};
  },
  methods: {
    logout() {
      this.$store.dispatch("destroyToken");
    },
  },
};
</script>

<style lang="scss">
</style>
