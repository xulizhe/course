<template>
  <div class="home">
      <v-banner></v-banner>
  </div>
</template>

<script>
// @ is an alias to /src
import VBanner from '@/components/VBanner/VBanner.vue'

export default {
  name: 'home',
  components: {
    VBanner
  }
}
</script>
<style lang="scss" scoped>
  .home {
    padding-top: 44px;
    padding-bottom: 49px;
    box-sizing: border-box;
  }
</style>
