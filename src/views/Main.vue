<template>
  <div>

    <Design/>
    <AboutMe/>
    <MyWorks/>
    <Process/>
    <ContactsBlock/>

  </div>
</template>

<script>
import Design from "../components/Design";
import AboutMe from "../components/AboutMe";
import MyWorks from "../components/MyWorks";
import Process from "../components/Process";
import ContactsBlock from "../components/ContactsBlock";

export default {
  name: "Home",
  components: {
    Design,
    AboutMe,
    MyWorks,
    Process,
    ContactsBlock,
  },
}
</script>

<style scoped>
</style>