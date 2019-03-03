<template>
  <div class="hello">
    <BackBtn />
    <h1>Trivia component</h1>
  </div>
</template>

<script>
import BackBtn from '../utils/BackHome.vue'

export default {
  name: 'Trivia',
  components: {
    BackBtn
  }
}
</script>

<style scoped>

h1{
  margin: 0px;
}

</style>
