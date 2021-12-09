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
      <q-carousel-slide :name="111" :img-src="require('../assets/img-carousel/111.jpg')"/>
     
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