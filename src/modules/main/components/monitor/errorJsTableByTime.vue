<template>
	<div class="table-wrap">
		<p class="chart-tit">JS错误数量堆叠图</p>
		<table class="table">
			<thead>
			<tr>
				<td>序号</td>
				<td>错误类型</td>
				<td>报错次数</td>
				<td>操作</td>
			</tr>
			</thead>
			<tbody>
			<tr v-for="(option, index) in errorJsTableListByTime">
				<td>{{index + 1}}</td>
				<td>{{option.key}}</td>
				<td>{{option.count}}</td>
				<td><a href="javascript:;" @click="showDetail(option)">详情</a></td>
			</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';
	export default{
		computed: {
			...mapGetters([
				'errorJsTableListByTime',
				'tableStartTime',
				'tableEndTime'
			])
		},
		methods: {
			showDetail(item) {
				this.$emit('showPop', item);
			}
		}
	};
</script>
<style>
	.table-wrap {
		margin-top: 20px;
		background: #fff;
		width: 800px;
		padding: 20px;
	}

	.table {
		border-spacing: 0;
		border-collapse: collapse;
		border: 1px solid #ddd;
		text-align: center;
		width: 100%;
	}

	.table td {
		border: 1px solid #ddd;
		height: 30px;
	}

	.table tbody tr:nth-child(odd) {
		background: #f9f9f9;
	}

	.table td a {
		color: #19d4ae;
	}
</style>
