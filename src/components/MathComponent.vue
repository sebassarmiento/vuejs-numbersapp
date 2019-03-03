<template>
  <div class="math-container">
    <BackBtn />
    <h1>Math component</h1>
    <Search />
  </div>
</template>

<script>
import BackBtn from '../utils/BackHome.vue'
import Search from '../utils/Search.vue'

export default {
  name: 'Math',
  components: {
    BackBtn,
    Search
  }
}
</script>

<style scoped>

h1{
  margin: 0px;
}

.math-container{
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
