<template>
  <Header/>
  <div class="content">
    <router-view/>
  </div>
</template>

<script>
import Header from "../components/Header";

export default {
  name: "PublicLayout",
  components: {
    Header
  }
}
</script>

<style scoped>

.content {
  max-width: 1200px;
  margin: 0 auto;
}
</style>