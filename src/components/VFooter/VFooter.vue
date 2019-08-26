<template>
<div class="v-footer">
  <div class="footer" v-for="(item,index) in footers" :key="index">
    <a href="#"><img class="img" :src="item.img"></a>
    <span class="title">{{item.title}}</span>
  </div>
</div>
</template>

<script>
export default {
  name: 'VFooter',
  data () {
    return {
      footers: [
        {
          img: require('./home.png'),
          title: '首页'
        },
        {
          img: require('./sea.png'),
          title: '发现'
        },
        {
          img: require('./download.png'),
          title: '下载'
        },
        {
          img: require('./me.png'),
          title: '我的'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.v-footer{
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0.9;
  background: #FFFFFF;
}
</style>
