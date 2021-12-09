<template>
  <div class="margin-bottom">

    <div class="image-block">
      <a>
        <img :src="require('../assets/aboutme.svg')" alt="aboutme"/>
      </a>
    </div>

    <div class="about-self-inner">
      <a>
        <img :src="require('../assets/aboutme.png')" alt="aboutme"/>
      </a>

      <div class="about-self-text">
        <p>Привет! Меня зовут Лиза. Я графический дизайнер.</p>
        <p>Работаю, люблю своё дело и лаконичные дизайны.</p>
        <p> Много умею, хочу уметь еще больше.</p>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: "AboutMe",
}
</script>

<style scoped>

.about-self-inner {
  display: flex;
  margin: 0 auto 400px;
  max-width: 750px;
  justify-content: space-between;
}

.about-self-text {
  max-width: 487px;
  align-self: center;
  text-align: left;
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 160.5%;
  letter-spacing: 0.04em;
  margin-left: 100px;
}
</style>