<template>
  <div class="search">
    <input v-model="query" type="number" />
    <i v-on:click="searchQuery" class="fas fa-search"></i>
    <div v-if="result && !loading" class="result" >
        {{ result }}
    </div>
    <div v-if="loading" class="result">
        Loading...
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: {
      category: String
  },
  data(){

      return {
          query: '',
          result: null,
          loading: false
      }

  },
  methods: {
      searchQuery(){
          this.loading = true
          if(this.query.length > 0){
              let URL = `http://numbersapi.com/${this.query}/${this.category}`
          console.log(URL)
          fetch(URL)
          .then(d => d.text())
          .then(res => {
              this.loading = false
              console.log('Aca',res)
              this.result = res
          })
          .catch(err => {
              this.loading = false
              console.log('Error',err)
          })
          }
      }
  },
  mounted(){
      console.log('Mounted', this.category)
  }

}
</script>

<style scoped>

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.search{
    padding: 12px;
    display: flex;
    width: 50vw;
    box-sizing: border-box;
    padding-top: 30px;
}

.search input{
    flex: 1;
    padding: 12px;
    border: none;
    border-radius: 4px;
    font-size: 1em;
    border-radius: 0px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border: 2px solid #d299c2;
    background: rgba(255, 255, 255, 0.247);
    color: white;
}

.search i{
    padding: 12px 24px;
    border-radius: 0px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border: 2px solid none;
    cursor: pointer;
    background-image: linear-gradient(to top, #d299c2 0%, #fef9d7 100%);
    display: flex;
    align-items: center;
    justify-content: center;
}

.result{
    position: absolute;
    height: 200px;
    top: calc(50% - 100px);
    left: 50%;
    width: 50vw;
    transform: translateX(-50%);
    background: white;
    padding: 12px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    animation: showResult 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform-origin: left;
}

@keyframes showResult {
    0%{
        transform: scale(0.5, 1) translateX(-50%);
    }
    100%{
        transform: scale(1) translateX(-50%);
    }
}

</style>
