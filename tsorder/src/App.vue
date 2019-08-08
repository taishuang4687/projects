<template>
	<div id="app">
		<SideBar></SideBar>

		<div id="content">
			<!-- 
				视频：21-配置关于我们的二三级路由 中提到导航的样式要修改，
				在这里把<router-view>父级的class去掉即可
			 -->
			<!-- <div class="box"> -->
			<div>
				
				<router-view></router-view>

			</div>
		</div>
	</div>
</template>

<script>
	import SideBar from './components/SideBar';

	export default {
		components:{	//导入进来的组件要放到components里面
			SideBar
		}
	}
</script>

<style>
body,p{
	margin: 0;
}
body{
	background: url(./assets/images/bg.jpg) center top no-repeat;
}
ul{
	margin: 0;
	padding: 0;
	list-style: none;
}
a{
	text-decoration: none;
}

#app{
	display: flex;
	width: 100%;
}
.logo{
	height: 120px;
}
#content{
	width: 100%;
	position: relative;
}
</style>
