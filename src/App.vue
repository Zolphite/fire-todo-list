<template>
  <div id="nav">
    <top-bar></top-bar>
  </div>
  <router-view/>
</template>

<script>
  import topBar from './components/top-bar.vue'

  export default {
    name: 'App',
    components: {
        topBar,
    },
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  /* font-weight: bold; */
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #ceedff;
}
</style>
