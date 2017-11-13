<template>
	<div class="nav-box">
		<img src="./../../../../assets/img/boy.png" alt="" class="head">
		<ul class="menu">
			<li v-for="(item, index) in menus">
				<router-link active-class="active" :to=item.jumpPage @click="jump(index)">{{item.name}}</router-link>
			</li>
		</ul>
		<div class="set-box">
			<ul class="set-menu">
				<li>
					<router-link class="icon add" :to="{name: 'add'}" active-class="active"></router-link>
					<!--<router-link class="icon add"></router-link>
					<a href="#" class="icon add"></a>-->
				</li>
				<li>
					<router-link class="icon set" :to="{name: 'set'}" active-class="active"></router-link>
					<!--<a href="#" class="icon set"></a>-->
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	//import {mapGetters} from 'vuex';
	export default{
		name: 'navBar',
		computed: {
			/*...mapGetters([
				'menus'
			])*/
		},
		methods: {},
		data() {
			return {
				menus: [
					{
						name: '页面分析',
						jumpPage: 'analyseshow'
					},
					{
						name: 'JS错误',
						jumpPage: 'mistakeshow'
					}
				]
			};
		}
	};
</script>
<style>
	@font-face {
		font-family: 'icon';
		src:url("./../../../../assets/font/fontawesome-webfont.eot");
		src:url("./../../../../assets/font/fontawesome-webfont.ttf") format("truetype"),
		url("./../../../../assets/font/fontawesome-webfont.woff") format("woff");
		font-weight: normal;
		font-style: normal;
	}
	.nav-box{
		text-align: center;
		padding-top:70px;
		width: 260px;
		background: #3e3e3e;
		position: fixed;
		top:0;
		left:0;
		bottom:0;
	}
	.nav-box .head{
		width:150px;
		height:150px;
	}
	.menu{
		margin-top:50px;
		border-top:1px solid rgba(107, 108, 109, 0.19);
	}
	.menu a{
		display: block;
		width:100%;
		height: 60px;
		line-height:60px;
		font-size:20px;
		border-bottom:1px solid rgba(107, 108, 109, 0.19);
		color:#B8B8B8;
	}
	.menu a.active{
		background:#EDEDED;
		color: #F36A5A
	}
	.menu a:hover:not(.active){
		background: #575757;
		color: #F36A5A;
	}
	.set-box{
		position: absolute;
		bottom: 10px;
		left:0;
		width:100%;
	}
	.set-menu li{
		height: 80px;
	}
	.set-menu li img{
		width:50px;
		height:50px;
	}
	.set-menu a{
		font-size:50px;
	}
	.set-menu a:hover{
		color:#F36A5A;
	}
	.icon{
		font-family: icon;
	}
	.add:before{
		content:"\f055";
	}
	.set:before{
		content:"\f013";
	}
	.set-menu a.active{
		color:#F36A5A;
	}

</style>
