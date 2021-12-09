<template>

  <div class="margin-bottom">
    <div class="image-block">
      <a>
        <img :src="require('../assets/process.svg')" alt="process"/>
      </a>
    </div>
    <div>
      <BlockElement
          :elements=createSkills
      />
    </div>
  </div>

</template>

<script>
import BlockElement from "./element/BlockElement";

export default {
  name: "Process",
  components: {
    BlockElement
  },
  data() {
    return {
      createSkills: [
        {text: "консультация."},
        {text: "создание дизайна."},
        {text: "внесение правок."},
        {text: "сдача работы."},
      ]
    }
  },
}
</script>

<style scoped>

</style>