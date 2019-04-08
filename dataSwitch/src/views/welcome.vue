<template>
	<div class="welcome">
    <img src="../assets/images/welcome.png" alt="" width="100%">
	</div>
</template>
<script type="text/javascript">
	export default {
		data:function(){
			return {
				text:'我是欢迎页！',
			}
		},
		created:function(){

		},
		methods:{

		}
	};
</script>
<style lang="scss">
  .welcome{
    display: flex;
    justify-content:center;
    align-items:center;
    height: 96%;
  }
</style>
