<template>
	<div>
		<p class="tit">总静态资源：10个</p>
		<div class="chart-box">
			<ul>
				<li>
					<error-js-bar v-on:showTable="showTable"></error-js-bar>
				</li>
			</ul>
		</div>
		<error-table v-if="isShowTable" v-on:showPop="showPop"></error-table>
		<date-picker v-on:dateSelect="dateSelect"></date-picker>
		<pop v-if="isShowPop"></pop>
<!--
		<a class="construct">图表对比</a>
-->
	</div>
</template>

<script type="text/ecmascript-6">
	import pop from './../../../../components/pop/pop.vue';
	import * as types from './../../../../store/mutation-types.js';
	import {mapGetters} from 'vuex';
	import errorTable from './../../../../components/monitor/errorJsTableByTime.vue';
	import errorJsBar from './../../../../components/monitor/errorJsBar.vue';
	import datePicker from '../../../../components/datepicker/datepicker.vue';
	export default{
		name: 'mistakeshow',
		components: {
			pop,
			errorTable,
			errorJsBar,
			datePicker
		},
		computed: {
			...mapGetters([
				'isShowPop',
				//'errorDetail',
				'isShowTable'
			])
		},
		methods: {
			showTable(data) { //点击图 展示表格
				this.$store.dispatch({
					type: 'getJsErrorTableListByTime',
					result: data
				});
				this.$store.commit({
					type: types.CHANGE_TABLEDISPLAY,
					result: true
				});
			},
			showPop(item) {
				this.$store.dispatch({
					type: 'getJsErrorDetail',
					result: item.key
				});
				this.$store.commit({
					type: types.CHANGE_POPDISPLAY,
					result: true
				});
			},
			dateSelect(timestampArr) { //选择日期 更新图表
				/*this.$store.commit({
					type: types.CHANGE_STARTTIME,
					startTime: timestampArr[0]
				});
				this.$store.commit({
					type: types.CHANGE_ENDTIME,
					endTime: timestampArr[1]
				});*/
				this.$store.dispatch({
					type: 'getErrorJsByTime',
					result: {
						id: '',
						startTime: timestampArr[0],
						endTime: timestampArr[1],
						interval: ''
					}
				});
			}
		}
	};
</script>
<style>
	.construct{
		position: fixed;
		right:5%;
		bottom:5%;
		display: block;
		padding:10px 30px;
		background: #F36A5A;
		color:#FFF;
	}
	.tit{
		color:#323232;
		font-size: 30px;
		padding:30px 0 0;
	}
	.chart-box ul{
		overflow: hidden;
		/*margin-left:-100px;*/
		width:800px;
	}
	.chart-box ul li{
		/*float:left;*/
		/*width:360px;*/
		/*height: 40px;*/
		/*border:1px solid red;*/
		/*margin-left: 100px;*/
		margin-top:20px;
		background: #fff;
		padding:20px;
	}
</style>
