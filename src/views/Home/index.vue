<template>
  <div class="home">
    <v-header></v-header>
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
import VHeader from '@/components/VHeader/VHeader.vue'
import VFooter from '@/components/VFooter/VFooter.vue'

export default {
  name: 'index',
  components: {
    VHeader,
    VFooter
  }
}
</script>
<style lang="scss" scoped>
  .home {
    position: relative;
    height: 100%;
    width: 100%;
    padding-top: 44px;
    padding-bottom: 49px;
    box-sizing: border-box;
  }
</style>
