<template>
  <div id="aside" style="overflow: hidden;">
    <el-scrollbar class="scroll-area">
    <el-menu :default-active="activeIndex" @open="handleOpen"
      @close="handleClose" :unique-opened="true" @select="handleSelect">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-share"></i>交换网络管理
        </template>
        <el-menu-item index="jhwlzlan">交换网络总览</el-menu-item>
        <el-menu-item index="jdgl">节点管理</el-menu-item>
        <el-menu-item index="fwqgl">服务器管理</el-menu-item>
        <el-menu-item index="sjkgl">数据库管理</el-menu-item>
        <el-menu-item index="sjygl">数据源管理</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-view"></i>状态监控
        </template>
        <el-menu-item index="jkzx">监控中心</el-menu-item>
        <el-menu-item index="jkfw">监控服务</el-menu-item>
        <el-menu-item index="dljd">代理节点</el-menu-item>
        <el-menu-item index="tjcx">统计查询</el-menu-item>
        <el-menu-item index="yxjk">运行监控</el-menu-item>
        <el-menu-item index="jhwljk">交换网络监控</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-refresh"></i>交换情况统计
        </template>
        <el-menu-item index="jhqktj">交换情况统计</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-star-on"></i>数据质量管理
        </template>
        <el-menu-item index="sjzl">数据质量规则配置</el-menu-item>
        <el-menu-item index="szfw">数值范围规则配置</el-menu-item>
        <el-menu-item index="zdfw">字典范围规则配置</el-menu-item>
        <el-menu-item index="sjgs">数据格式验证规则配置</el-menu-item>
        <el-menu-item index="sfyz">身份验证规则配置</el-menu-item>
        <el-menu-item index="zdxg">字段相关性检验规则配置</el-menu-item>
        <el-menu-item index="kzyz">空值验证规则配置</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-tickets"></i>数据质量监测
        </template>
        <el-menu-item index="sjzljc">数据质量监测</el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-question"></i>问题数据分析
        </template>
        <el-menu-item index="wtsjfx">问题数据分析</el-menu-item>
      </el-submenu>
      <el-submenu index="7">
        <template slot="title">
          <i class="el-icon-news"></i>数据治理
        </template>
        <el-menu-item index="cfsjzli">重复数据治理</el-menu-item>
        <el-menu-item index="cwsjzliss">错误数据治理</el-menu-item>
      </el-submenu>
      <el-submenu index="8">
        <template slot="title">
          <i class="el-icon-document"></i>质量评估报告
        </template>
        <el-menu-item index="zlpgbg">质量评估报告</el-menu-item>
      </el-submenu>
    </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>

export default {
  data:function() {
    return {
       activeIndex: "/welcome"
    }
  },
  mounted:function(){
    this.activeIndex = this.$route.path;
  },
  watch: {
    $route: function(to, from) {
      this.activeIndex = this.$route.path;
    }
  },
  methods: {
    handleOpen:function(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose:function(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect:function(key, keyPath){
      this.$router.push(key);
    }
  }
};
</script>

<style lang="scss" scoped>
  #aside{
    width: 240px;
    height: 100%;
    overflow: hidden;
  }
  .el-menu{
    border:none;
  }
  .el-menu-item.is-active{
    height: 40px;
    line-height: 40px;
    color: #409eff;
  }
  .el-menu-item, .el-submenu__title{
    height: 40px;
    line-height: 40px;
  }
  .el-scrollbar{
    /*height: 100%;*/
    overflow-x: hidden;
  }

</style>

