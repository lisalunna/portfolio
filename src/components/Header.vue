<template>
  <div class="header-inner">

    <div>
      <div class="header-first header-text">
        <router-link to="/">lizalunna</router-link>
      </div>
    </div>

    <div class="header-group-2">
      <button class="btn-portfolio header-text btn-reset">
        <a href="https://www.behance.net/villliza104dde" target="_blank">портфолио</a>
      </button>

      <button class="btn-contacts header-text btn-reset">
        <router-link to="/contacts">контакты</router-link>
      </button>
    </div>

  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped lang="scss">

.header-inner {
  display: flex;
  justify-content: space-around;
  margin: 25px 0 150px;
}

.header-group-2 {
  display: flex;
  width: 300px;
  justify-content: space-between;
}

.header-text {
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0.1em;
}


.btn-reset {
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

a {
  outline: none;
  text-decoration: none;
}

a:link {
  color: black;
}

a:visited {
  color: black;
}

a:focus {
  border-bottom: 1px solid;
}

a:hover {
  border-bottom: 1px solid;
}

</style>