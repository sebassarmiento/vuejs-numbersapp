<template>
  <div class="hello">
    <BackBtn />
    <h1>Choose a date</h1>
  </div>
</template>

<script>
import BackBtn from '../utils/BackHome.vue'

export default {
  name: 'Date',
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
