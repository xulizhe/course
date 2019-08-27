<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  html, body, #app{
    width: 100%;
    height: 100%;
    /*overflow: hidden;*/
  }
  body {
    -webkit-overflow-scrolling:touch;
  }
  a{
    text-decoration: none;
  }
</style>
