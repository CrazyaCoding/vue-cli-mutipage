<template>
	<ul class="pagelist">
		<li v-for="(item, index) in pages" @click="jump(item)" >{{item.name}}</li>
	</ul>
</template>

<script>
	import {mapGetters} from 'vuex';
	//import * as types from './../../../store/mutation-types.js';
	//import router from './../../../router';
	export default{
		name: 'indexist',
		computed: {
			...mapGetters([
				'pages'
			])
		},
		created() {
			this.$store.dispatch({
				type: 'getPagesByPageNumber',
				result: {pageNum: 1, pageSize: 10}
			});
		},
		methods: {
			jump(item) {
				/*this.$store.commit({
					type: types.CHANGE_PAGEID,
					result: item.pageId
				});
				router.push({name: 'mistakeshow'});*/
			}
		},
		data() {
			return {
				/*pageList: [
					{pageId: 4, pageName: '简历详情页'},
					{pageId: 5, pageName: '简历列表页'},
					{pageId: 6, pageName: '简历删除页'},
					{pageId: 6, pageName: '简历删除页'},
					{pageId: 6, pageName: '简历删除页'},
					{pageId: 6, pageName: '简历删除页'},
					{pageId: 6, pageName: '简历删除页'},
					{pageId: 6, pageName: '简历删除页'},
					{pageId: 6, pageName: '简历删除页'},
					{pageId: 6, pageName: '简历删除页'},
					{pageId: 6, pageName: '简历删除页'},
					{pageId: 7, pageName: '简历添加页'}
				]*/
			};
		}
	};
</script>
<style>
	.pagelist{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		padding:50px 0;
	}
	.pagelist li{
		width:200px;
		height:200px;
		line-height: 200px;
		text-align: center;
		font-size:20px;
		cursor: pointer;
	}
	.pagelist a{
		display: block;
	}
	.pagelist li{
		margin: 10px 10px;
	}
	.pagelist li:nth-child(odd){
		background: #f36a5a;
	}
	.pagelist li:nth-child(even){
		background: #30A5FF;
	}
</style>
