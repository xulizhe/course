<template>
<div class="v-banner">
  <div class="banner" v-for="(item,index) in banners" :key="index">
    <a href="#"><img class="img" :src="item.img"></a>
    <span class="title">{{item.title}}</span>
  </div>
</div>
</template>

<script>
export default {
  name: 'VBanner',
  data () {
    return {
      banners: [
        {
          img: require('./web.png'),
          title: '前端开发'
        },
        {
          img: require('./webservice.png'),
          title: '后端开发'
        },
        {
          img: require('./move.png'),
          title: '移动开发'
        },
        {
          img: require('./data.png'),
          title: '数据库'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.v-banner {
  height: 100px;
  width: 375px;
  background: #F3F5F7;
  display: flex;
  .banner {
    margin: 20px;
    display: flex;
    flex-direction: column;
    a {
      display: block;
      line-height: 0;
      height: 32px;
      margin: 0 12px 12px 12px;
      .img{
        width: 32px;
      }
    }
    .title{
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #2B333B;
      letter-spacing: 0;
      line-height: 16px;
      text-align: center;
    }
  }
}
</style>
