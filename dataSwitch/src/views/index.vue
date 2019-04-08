<template>
	<el-container>
	  <el-header>
	  	<wt-header></wt-header>
	  </el-header>
	  <el-container>
	  <el-aside :width="asideWidth">
        <sub-menu></sub-menu>
      </el-aside>
	    <el-main>
	    	<router-view></router-view>
	    </el-main>
	  </el-container>
	</el-container>
</template>
<script type="text/javascript">
	import wtHeader from './header'
	import subMenu from './subMenu'
	export default{
		components:{
			wtHeader,
			subMenu
		},
		data:function(){
			return {
				asideWidth:'240',
				isCollapse: true
			}
		},
		created:function(){
			this.$router.push('/welcome');
		},
		methods:{

		}
	};
</script>
<style lang="scss">
  .el-aside{
    overflow: hidden;
  }
</style>
