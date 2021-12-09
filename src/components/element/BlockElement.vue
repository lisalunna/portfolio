<template>
  <div v-for="(item, index) in elements" :key="index">
    <SingleElement
        :text=item.text
    />
  </div>
</template>

<script>
import SingleElement from "./SingleElement";

export default {
  name: "BlockElement",
  components: {SingleElement},
  props: {
    elements: Array,
  },
}
</script>

<style scoped>

</style>