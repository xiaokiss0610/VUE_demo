<template>
	<div class="header">
		<router-link to="/welcome" class="logo">
			<i class="iconfont el-icon-wtcms-zhanqun"></i>数据交换质量监控系统
		</router-link>
		<div id="info">
			欢迎您，{{userName}}!
			<i class="iconfont el-icon-wtcms-tuichu1" title="退出" @click="logout"></i>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data:function(){
			return {
				userName:'admin',
				viewPoint:'运维视图',
				activeIndex:'/optView',
				menuArr:[]
			}
		},
		created:function(){

		},
		methods:{
      logout(){
			  localStorage.setItem('token','');
			  this.$router.push('/login');
      }
		}
	};
</script>
<style lang="scss">
.header{
	.logo{
		float:left;
		width: 220px;
		padding-left: 20px;
		color: #fff;
		text-decoration: none;
		font-size: 16px;
		font-weight: 500;
		background: #008df6;
		&.hover,&.focus,&.active,&.linked{
			text-decoration: none;
			color: #fff;
		}
		i.iconfont{
			font-size: 25px;
			cursor: pointer;
			&.el-icon-wtcms-zhanqun{
				font-size: 40px;
			    vertical-align: -8px;
			    margin-right: 10px;
			}
		}
		.el-dropdown{
			margin-left: 20px;
    	color: #fff;
		}
	}
	.el-menu--horizontal{
		float: left;
		background: transparent;
		&>.el-submenu{
			box-sizing: border-box;
			&:hover,&:focus{
				.el-submenu__title,.el-submenu__title:hover{
					color: #a4cceb;
					background: transparent;
				}
			}
			&.is-active{
				.el-submenu__title{
					color: #fff;
					i{
						color: #fff;
					}
				}
			}
			.el-submenu__title{
				color: #a4cceb;
				font-size: 15px;
				i{
					color: #a4cceb;
				}
			}
		}
	}
	.el-submenu__title:focus, .el-submenu__title:hover{
		background: transparent;
	}
	#info{
		float: right;
		.el-dropdown{
			margin-right: 20px;
			color: #fff;
		}
		.iconfont{
			margin-left: 20px;
	    vertical-align: -4px;
	    font-size: 23px;
	    cursor: pointer;
		}
	}
}
</style>
