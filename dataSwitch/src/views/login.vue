<template>
	<div class="loginBody">
		<div id="login">
			<el-input placeholder="用户名" v-model="userName">
		    <template slot="prepend">用户名</template>
		  </el-input>
		  <br><br>
		  <el-input placeholder="密码" v-model="password" type="password">
		    <template slot="prepend">密　码</template>
		  </el-input>
		  <br><br>
			<el-button type="primary" @click="login">登录</el-button>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data:function(){
			return {
				userName:'admin',
				password:'admin'
			}
		},
		methods:{
			login:function(){
				if(this.userName == ''){
					this.$message({
	          message: '用户名不能为空！',
	          type: 'error'
	        });
          return false;
        }
        if (this.password == ''){
        	this.$message({
	          message: '密码名不能为空！',
	          type: 'error'
	        });
          return false;
        }
        let res={data:{name:'admin',expire:30,token:'1233846723'}};
				
				localStorage.setItem("userInfo",JSON.stringify(res.data));
		    localStorage.setItem("token",res.data.token);
				this.$message({
          message: '登录成功！',
          type: 'success'
        });
        this.$router.push('/');
			}
		}
	};
</script>
<style lang="scss">
	.loginBody{
		height: 100%;
		background: #141A48;
		#login{
			width: 350px;
			padding-top: 200px;
			margin: 0 auto;
		}
		.el-input-group>.el-input__inner{
			color: #fff;
			background: transparent;
		}
	}
</style>