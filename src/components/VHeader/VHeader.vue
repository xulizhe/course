<template>
<div class="v-header">
<ul class="header-ul">
  <li v-for="(item,index) in menuList"
      :key="index" @click="select(item)"
      :class="{active:activeId === item.id}"
      >{{item.name}}</li>
  <li class="search"><img src="./search.png"></li>
  <li class="history"><img src="./history.png"></li>
</ul>
</div>
</template>

<script>
export default {
  name: 'VHeader',
  data () {
    return {
      activeId: 2,
      menuList: [
        {
          id: 1,
          name: '推荐',
          link: '/recommend'
        }, {
          id: 2,
          name: '课程',
          link: '/'
        }, {
          id: 3,
          name: '实战',
          link: '/actual'
        }, {
          id: 4,
          name: '职业路径',
          link: '/career'
        }
      ]
    }
  },
  methods: {
    select: function (menu) {
      this.activeId = menu.id
      this.$router.push(menu.link)
    }
  }
}
</script>

<style lang="scss" scoped>
$base-font-size:0;
$base-height:44px;
.v-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 375px;
  height: $base-height;
  background: #FFFFFF;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);
  .header-ul {
    li {
      position: relative;
      display: block;
      float: left;
      line-height: $base-height;
      margin-left: 20px;
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #71777D;
      letter-spacing: 0;
      &.active:after {
        position: absolute;
        bottom: 7px;
        left: 50%;
        transform: translate(-50%, 0);
        content: '';
        width: 70%;
        height: 2px;
        background: #f01414;
      }
      img {
        width: 18px;
        vertical-align: middle;
      }
    }
    .search {
      margin-left: 0;
      font-size: $base-font-size;
      padding-left: 59px;
    }
    .history {
      font-size: $base-font-size;
    }
  }
}
</style>
