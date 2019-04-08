<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style lang='scss'>
  *{
    margin:0;
    padding:0;
    font-size: 14px;
    font-family:"Hiragino Sans GB","Hiragino Sans GB W3","WenQuanYi Micro Hei","Microsoft YaHei",sans-serif;
    /*font-family: sans-serif;*/
    /*font-size: 13px;*/
  }
  html,body,#app{
    width: 100%;
    height: 100%;
  }
</style>

