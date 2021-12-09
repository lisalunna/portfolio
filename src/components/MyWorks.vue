<template>
  <div class="margin-bottom">
    <div class="image-block">
      <a>
        <img :src="require('../assets/works.svg')" alt="works"/>
      </a>
    </div>

    <div>
      <BlockElement
          :elements=workSkills
      />
    </div>

    <div class="carousel">
      <Carousel/>
    </div>

    <div class="arrow-top">
      <a>
        <img :src="require('../assets/arrow1.svg')" alt="arrow-top"/>
      </a>
      <span class="arrow-text">пролистай мои проекты.</span>
    </div>

    <div class="my-works-text">
      <a href="https://www.behance.net/villliza104dde" class="behance btn-style">полное портфолио тут</a>
    </div>
  </div>
</template>

<script>
import Carousel from "./Carousel";
import BlockElement from "../components/element/BlockElement";

export default {
  name: "MyWorks",
  components: {Carousel, BlockElement},
  data() {
    return {
      workSkills: [
        {text: "типографика."},
        {text: "логотипы."},
        {text: "иллюстрации."},
        {text: "айдентика."},
      ],
    }
  }
}
</script>

<style scoped>

.arrow-top {
  max-width: 800px;
  margin: 0 auto;
  text-align: right;
}

.arrow-text {
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 42px;
  color: #000000;
  margin-left: 40px;
}

.my-works-text {
  max-width: 1000px;
  text-align: center;
  margin: 150px auto 400px;
}

.btn-style {
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 42px;

  color: #000000;

  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.carousel {
  margin: 200px auto 100px;
  max-width: 800px;
}

</style>