<template>
  <div class="choose">
     <h1>Choose a category!</h1>
     <div class="container-options">
        <div v-on:click="chooseCategory('trivia')" class="choose-category">
            <i class="fas fa-brain"></i>
            <p>Trivia</p>
        </div>
        <div v-on:click="chooseCategory('year')" class="choose-category">
            <i class="far fa-calendar-alt"></i>
            <p>Year</p>
        </div>
        <div v-on:click="chooseCategory('date')" class="choose-category">
            <i class="far fa-clock"></i>
            <p>Date</p>
        </div>
        <div v-on:click="chooseCategory('math')" class="choose-category">
            <i class="fas fa-superscript"></i>
            <p>Math</p>
        </div>
     </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
      chooseCategory(route){
          this.$router.push(route)
      }
  }
}
</script>

<style scoped>

h1{
  margin: 0px;
  color: white;
  font-weight: lighter;
}

.choose{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.container-options{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 24px 10vw;
    grid-gap: 12px;
}

.choose-category{
    background: rgb(231, 230, 230);
    border-radius: 4px;
    padding: 12px;
    height: 200px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    display: flex;
    font-size: 2em;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.choose-category p{
    margin: 0px;
    margin-top: 12px;
}

.choose-category:hover{
    transform: translateY(-10px);
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    cursor: pointer;
}

</style>
