<template>
  <div class="home">
    <v-header></v-header>
    <v-banner></v-banner>
    <v-footer></v-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import VHeader from '@/components/VHeader/VHeader.vue'
import VFooter from '@/components/VFooter/VFooter.vue'
import VBanner from '@/components/VBanner/VBanner.vue'

export default {
  name: 'home',
  components: {
    VBanner,
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
