<template>
  <div class="content">
    <v-banner></v-banner>
    <v-course></v-course>
  </div>
</template>

<script>
import VBanner from '@/components/VBanner/VBanner.vue'
import VCourse from '@/components/VCourse/VCourse.vue'

export default {
  name: 'HomeList',
  components: {
    VBanner,
    VCourse
  },
  beforeDestroy () {
    console.log('beforeDestroy')
  },
  destroyed () {
    console.log('destroyed')
  }
}
</script>

<style lang="scss" scoped>
  .content {
    -webkit-overflow-scrolling:touch;
    height: 100%;
    width: 100%;
    overflow: auto;
  }
</style>
