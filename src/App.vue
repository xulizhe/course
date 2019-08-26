<template>
  <div id="app">
    <home></home>
  </div>
</template>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  a{
    text-decoration: none;
  }
</style>
<script>
import Home from './views/Home'
export default {
  components: { Home }
}
</script>
