<template>
  <div id="app">
    <Navbar />
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/navbar/TheNavbar.vue";

export default {
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
body {
  font-family: "Montserrat", sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
