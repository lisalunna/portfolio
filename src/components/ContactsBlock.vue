<template>

  <div class="margin-bottom">
    <div class="contacts-block">
      <a>
        <img :src="require('../assets/contacts.svg')" alt="contacts"/>
      </a>
    </div>

    <div>
      <BlockElement
          :elements=contactElements
      />
    </div>
  </div>

</template>

<script>
import BlockElement from "../components/element/BlockElement";

export default {
  name: "ContactsBlock",
  components: {
    BlockElement
  },
  data() {
    return {
      contactElements: [
        {text: "tg – @lizalunna."},
        {text: "inst – @lizalunna."},
        {text: "vill.liza10@gmail.com."},
      ],
    }
  },
}
</script>

<style scoped>

.contacts-block {
  max-width: 1000px;
  margin: 400px auto 100px;
  text-align: center;
}
</style>