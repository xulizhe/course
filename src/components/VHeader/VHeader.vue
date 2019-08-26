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
      display: block;
      float: left;
      line-height: $base-height;
      padding-left: 20px;
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #71777D;
      letter-spacing: 0;
      img {
        width: 18px;
        vertical-align: middle;
      }
    }
    .search {
      font-size: $base-font-size;
      padding-left: 59px;
    }
    .history {
      font-size: $base-font-size;
    }
  }
}
</style>
