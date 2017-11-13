<template>
	<div>
		<nav-bar></nav-bar>
		<div class="left">
			<router-view></router-view>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import navBar from './views/nav/nav.vue';
	export default{
		name: 'main',
		components: {
			navBar
		}
	};
</script>
<style>
	@import './../../assets/css/reset.css';
	@import './../../assets/css/chart.min.css';
	html{
		background: #EDEDED;
	}
	.left{
		padding-left:340px;
		background: #EDEDED;
		padding-bottom: 30px;
	}
</style>
