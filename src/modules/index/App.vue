<template>
	<div class="box" id="box">
		<router-view></router-view>
	</div>
</template>

<script type="text/ecmascript-6">
	/*import indexList from './views/list/indexList.vue';
	import home from './views/home/home.vue';
	import permission from './views/permission/permission.vue';
	import {mapGetters} from 'vuex';
	export default{
		name: 'modules',
		computed: {
			...mapGetters([
				'isShowPage',
				'isFirstIn'
			])
		},
		components: {
			home,
			permission,
			indexList
		},
		methods: {
		},
		created: function() {
		},
		mounted: function() {
		}
	};*/
</script>
<style>
	@import './../../assets/css/reset.css';
	@import './../../assets/css/animate.css';
	.box{
		width: 880px;
		margin:0 auto;
	}
</style>
