<template>
  <div class="home">
    <div class="header">
      <v-header></v-header>
    </div>
    <div class="banner">
      <v-banner></v-banner>
    </div>
    <div class="footer">
      <v-footer></v-footer>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import VHeader from '@/components/VHeader/VHeader.vue'
import VBanner from '@/components/VBanner/VBanner.vue'
import VFooter from '@/components/VFooter/VFooter.vue'

export default {
  name: 'home',
  components: {
    VHeader,
    VBanner,
    VFooter
  }
}
</script>
<style lang="scss" scoped>
  .header {
    position: relative;
  }
  .banner {
    padding-top: 44px;
  }
  .footer{
    position: relative;
  }
</style>
