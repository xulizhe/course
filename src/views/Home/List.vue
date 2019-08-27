<template>
  <div class="content">
    <v-banner></v-banner>
    <router-link to="/detail">查看详情</router-link>
  </div>
</template>

<script>
  import VBanner from '@/components/VBanner/VBanner.vue'

  export default {
    name: 'HomeList',
    components: {
      VBanner
    }
  }
</script>

<style lang="scss" scoped>
  .content {
    height: 100%;
    width: 100%;
  }
</style>
