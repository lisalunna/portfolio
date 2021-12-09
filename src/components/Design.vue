<template>
  <div class="margin-bottom">

    <div class="design-text">
      <a>
        <img :src="require('../assets/design.svg')" alt="design"/>
      </a>
    </div>

  </div>
</template>

<script>
export default {
  name: "Design",
}
</script>

<style scoped>
.design-text {
  max-width: 1000px;
  margin: 25px auto 400px;
  text-align: center;
}
</style>