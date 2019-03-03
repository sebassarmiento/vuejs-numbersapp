<template>
  <i v-on:click="backHome" class="fas fa-home back"></i>
</template>

<script>
export default {
  name: 'BackBtn',
  methods: {
      backHome(){
          console.log('clicked')
          this.$router.push('/')
      }
  }
}
</script>

<style scoped>

.back{
  position: absolute;
  top: 24px;
  left: 24px;
  padding: 24px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  animation: showBackHomeBtn 0.3s ease-in-out 0.5s forwards;
  transform: scale(0);
}

.back:hover{
  text-shadow: 0px 0px 10px white;
}

@keyframes showBackHomeBtn {
  0%{
    transform: scale(0);
  }
  80%{
    transform: scale(1.4);
  }
  100%{
    transform: scale(1);
  }
}

</style>
