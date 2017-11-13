<template>
	<div @click="toggle">
		<div class="meng"></div>
		<div class="box" id="pop">
			<p>报错详细信息<a class="close" @click="toggle">X</a></p>
			<ul class="error-list">
				<li v-for="(option, index) in jsErrorDetail" class="error-list-wrap-li">
					<ul>
						<li>第{{index+1}}条</li>
						<li>报错行列号：{{option.col}}行 {{option.row}}列</li>
						<li>报错文件：{{option.file}}</li>
						<li>报错类型：{{option.msg}}</li>
						<li>报错平台：{{option.platform}}</li>
						<li>报错时间：{{option.time}}</li>
						<li>报错浏览器：{{option.userAgent}}</li>
						<li>报错地址：{{option.url}}</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import * as types from './../../store/mutation-types.js';
import {mapGetters} from 'vuex';

export default{
	name: 'pop',
	computed: {
		...mapGetters([
			'jsErrorDetail'
		])
	},
	mounted: function() {
		let box = document.getElementById('pop'),
			boxH = box.offsetHeight,
			boxW = box.offsetWidth;
		box.style.marginTop = -(boxH / 2) + 'px';
		box.style.marginLeft = -(boxW / 2) + 'px';
	},
	methods: {
		toggle() {
			this.$store.commit({
				type: types.CHANGE_POPDISPLAY,
				isShowPop: false
			});
		}
	}
};
</script>
<style>
	.box{
		border:1px solid #3dff3c;
		position: fixed;
		top:50%;
		left:50%;
		min-width:300px;
		max-width: 700px;
		background: #FFF;
		border:1px solid #bce8f1;
	}
	.box p{
		height: 40px;
		line-height: 40px;
		background: #bce8f1;
		position: relative;
		padding-left:20px;
	}
	.close{
		display: block;
		padding:0 10px;
		position: absolute;
		right:10px;
		top:0;
		height:40px;
		line-height: 40px;
		cursor: pointer;
	}
	.error-list{
		padding:10px 20px 20px;
		max-height:400px;
		overflow: scroll;
		background: #fff;
	}
	.error-list li{
		padding-top:10px;
	}
	.error-list-wrap-li{
		padding-bottom: 10px;
		border-bottom:1px solid #8b8b8b;
	}
	.meng{
		position: fixed;
		top:0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
/*
		filter: blur(10px);
*/
	}
</style>
