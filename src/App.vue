<template>
  <div id="app">
    <v-header></v-header>
    <home class="page-content"></home>
    <v-footer></v-footer>
  </div>
</template>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  html, body, #app ,.page-content{
    width: 100%;
    height: 100%;
    /*overflow: hidden;*/
  }
  a{
    text-decoration: none;
  }
  #app {
    position: relative;
  }
</style>
<script>
import VHeader from '@/components/VHeader/VHeader.vue'
import VFooter from '@/components/VFooter/VFooter.vue'
import Home from './views/Home'
export default {
  components: { Home, VHeader, VFooter }
}
</script>
