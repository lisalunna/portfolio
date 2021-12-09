<template>
  <div class="element-inner">
    <a class="arrow">
      <img :src="require('@/assets/arrow.svg')" alt="arrow"/>
    </a>

    <div class="element-text">
      <p>{{ text }}</p>
    </div>
  </div>
</template>
<script>

export default {
  name: "SingleElement",
  props: {
    text: String,
  },
}
</script>

<style scoped>

.element-inner {
  display: flex;
  justify-content: space-between;
  margin: 0 auto 20px;
  max-width: 500px;
  
}

.element-text {
  align-self: center;
  text-align: right;

  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 51px;
  color: #000000;
}

.arrow {
  align-self: center;
}

</style>