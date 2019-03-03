<template>
  <div id="app">

    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body{
  margin: 0px;
  padding: 0px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
}
</style>
