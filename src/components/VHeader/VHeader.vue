<template>
<div class="v-header">
<ul class="header-ul">
  <li>推荐</li>
  <li>课程</li>
  <li>实战</li>
  <li>职业路径</li>
  <li class="search"><img src="./search.png"></li>
  <li class="history"><img src="./history.png"></li>
</ul>
</div>
</template>

<script>
export default {
  name: 'VHeader'
}
</script>

<style lang="scss" scoped>
.v-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 375px;
  height: 44px;
  background: #FFFFFF;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);
  .header-ul {
    li {
      display: inline-block;
      line-height: 44px;
      padding-left: 30px;
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #71777D;
      letter-spacing: 0;
      img {
        width: 18px;
      }
    }
    .search {
      padding-left: 39px;
    }
    .history {
      padding-left: 15px;
    }
  }
}
</style>
