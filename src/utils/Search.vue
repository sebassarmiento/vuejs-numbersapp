<template>
  <div class="search">
    <input type="text" />
    <i class="fas fa-search"></i>
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style scoped>

.search{
    padding: 12px;
    display: flex;
    width: 50vw;
    box-sizing: border-box;
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
    border: 2px solid green;
    background: rgba(255, 255, 255, 0.815);
}

.search i{
    padding: 12px 24px;
    background: green;
    border-radius: 0px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border: 2px solid green;
    cursor: pointer;
}

</style>
