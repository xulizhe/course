<template>
<div class="v-footer">
  <div class="footer" v-for="(item,index) in footers" :key="index">
    <a :name="item.name" @click="jumpPage(item.name)"><img class="img" :src="item.img"></a>
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
          img: require('./sea.png'),
          title: '首页',
          name: 'home'
        },
        {
          img: require('./sea.png'),
          title: '发现',
          name: 'search'
        },
        {
          img: require('./download.png'),
          title: '下载',
          name: 'download'
        },
        {
          img: require('./me.png'),
          title: '我的',
          name: 'me'
        }
      ]
    }
  },
  methods: {
    jumpPage: function (name) {
      this.$router.push(`/${name}`)
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
  background: darkgray;
  height: 49px;
  width: 375px;
  display: flex;
  align-items: center;
  .footer {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
      height: 24px;
      .img{
        width: 24px;
      }
    }
    a:active {
      & + .title {
        color: red;
      }
    }
    .title {
      margin-top: 4px;
      ont-family: PingFangSC-Regular;
      font-size: 10px;
      color: #2B333B;
      letter-spacing: 0;
      line-height: 10px;
    }
  }
}
</style>
