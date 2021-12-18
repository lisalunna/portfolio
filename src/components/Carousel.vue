<template>
  <div class="q-pa-md">
    <q-carousel
        animated
        v-model="slide"
        arrows
        navigation
        infinite
    >
      <q-carousel-slide :name="1" :img-src="require('../assets/img-carousel/1.jpg')"/>
      <q-carousel-slide :name="2" :img-src="require('../assets/img-carousel/2.jpg')"/>
      <q-carousel-slide :name="3" :img-src="require('../assets/img-carousel/3.jpg')"/>
      <q-carousel-slide :name="4" :img-src="require('../assets/img-carousel/4.jpg')"/>
      <q-carousel-slide :name="5" :img-src="require('../assets/img-carousel/5.jpg')"/>
      <q-carousel-slide :name="6" :img-src="require('../assets/img-carousel/6.jpg')"/>
      <q-carousel-slide :name="7" :img-src="require('../assets/img-carousel/7.jpg')"/>
      <q-carousel-slide :name="8" :img-src="require('../assets/img-carousel/8.jpg')"/>
    </q-carousel>
  </div>
</template>

<script>
import {ref} from 'vue'

export default {
  name: "Carousel",
  setup() {
    return {
      slide: ref(1)
    }
  }
}
</script>

<style scoped>


</style>