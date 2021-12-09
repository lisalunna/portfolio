<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<script>
import PublicLayout from "./layouts/PublicLayout";

export default {
  name: 'App',
  computed: {
    layout() {
      return (this.$route.meta.layout || "public") + "-layout";
    }
  },
  components: {
    PublicLayout
  }
}
</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
}

.image-block {
  max-width: 1000px;
  margin: 25px auto 100px;
  text-align: center;
}

.margin-bottom {
  margin-bottom: 150px;
}
</style>
