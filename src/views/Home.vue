<template>
  <div class="home">
    <div class="header">
      <v-header></v-header>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import VHeader from '@/components/VHeader/VHeader.vue'

export default {
  name: 'home',
  components: {
    VHeader
  }
}
</script>
<style lang="scss" scoped>
  .header {
    position: relative;
  }
</style>
