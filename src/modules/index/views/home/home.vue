<template>
	<div id="indexWrap" class="index-wrap">
		<div class="tit-wrap">
			<p class="tit">性能分析&报错监控平台</p>
			<p class="sub-tit">make your website better</p>
		</div>
		<div class="arrow-wrap">
			<p class="arrow arrow-up"></p>
			<p class="arrow arrow-down" v-on:click="rolldown"></p>
			<!--v-on:click="rolldown"-->
		</div>
	</div>
</template>

<script>
	//import {mapGetters} from 'vuex';
	//import * as types from './../../../store/mutation-types.js';
	import router from './../../router';
	export default{
		computed: {
			/*...mapGetters([
				'isShowPage',
				'isFirstIn'
			])*/
		},
		methods: {
			rolldown() {
				router.push({name: 'list'});
				/*if (this.isFirstIn) {
					this.$store.commit({
						type: types.CHANGE_INDEXPAGE,
						result: 'permission'
					});
				} else {
					this.$store.commit({
						type: types.CHANGE_INDEXPAGE,
						result: 'indexList'
					});
				}*/
			}
		}
	};
</script>
<style>
	.index-wrap{
		position: relative;
	}
	.tit-wrap{
		padding-top:200px;
	}
	.tit-wrap .tit{
		font-size:40px;
		text-align: center;
		color:#676767;
		font-weight:bold;
	}
	.sub-tit{
		padding-top:20px;
		font-size:16px;
		text-align: center;
		color:#7E7E7E;
	}
	.arrow-wrap{
		position: fixed;
		bottom:30px;
		left:48%;
		height:100px;
		animation: hang 1s ease-out infinite;
	}
	.arrow{
		width: 30px;
		height:30px;
		border-top:2px solid #7E7E7E;
		border-left:2px solid #7E7E7E;
		transform: rotate(225deg);
		position: absolute;

	}
	.arrow-up{
		top:0;
	}
	.arrow-down{
		top:10%;
	}
	@keyframes hang {
		from{
			bottom:20px;
		}to{
			 bottom:30px;
		 }
	}
</style>
