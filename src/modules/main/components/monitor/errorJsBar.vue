<template>
	<div>
		<p class="chart-tit">JS错误数量堆叠图</p>
		<veline :events="chartEvents" :data="errorJsByTimeListChart" :settings="chartSettings" class="chart"></veline>
	</div><!---->
</template>

<script>
	import {mapGetters} from 'vuex';
	//import histogram from 'v-charts/lib/histogram';
	//import line from 'v-charts/lib/line';
	import { objToMap } from './../../../../util/objToArr';
	import { clone } from './../../../../util/clone.js';
	import {timeInListToFormate} from './../../../../util/timeInListToFormate.js';
	//import * as types from './../../store/mutation-types.js';

	const renderChart = () => ({
		component: import(/* webpackChunkName: "chartJs" */ 'v-charts/lib/line'),
		//loading: '',
		//error: '',
		delay: 200,
		timeout: 3000
	});

	/*const AsyncComp = () => ({
	 // 需要加载的组件。应当是一个 Promise
	 component: import('./MyComp.vue'),
	 // 加载中应当渲染的组件
	 loading: LoadingComp,
	 // 出错时渲染的组件
	 error: ErrorComp,
	 // 渲染加载中组件前的等待时间。默认：200ms。
	 delay: 200,
	 // 最长等待时间。超出此时间则渲染错误组件。默认：Infinity
	 timeout: 3000
	 })*/

	export default{
		components: {
			//histogram,
			'veline': renderChart
			//'veline': line
		},
		computed: {
			...mapGetters([
				'errorJsByTimeList',
				'duration',
				'startTime',
				'endTime',
				//'tableStartTime',
				//'tableEndTime',
				'interval',
				'errorJsTableListByTime'
			]),
			errorJsByTimeListChart() {
				if (this.errorJsByTimeList.length > 0) {
					let tmpErrorJsByTimeList = clone(this.errorJsByTimeList);
					let tmp = [...tmpErrorJsByTimeList];
					return {
						columns: [...objToMap(tmp).keys()],
						rows: timeInListToFormate(tmp, 'key', 'isoTime')
					};
				}
			},
			chartSettings() {
				return {
					area: true
				};
			}
		},
		created: function() {
			let self = this;
			this.$store.dispatch({
				type: 'getErrorJsByTime',
				result: {
					id: '',
					startTime: self.startTime,
					endTime: self.endTime,
					interval: self.interval
				}
			});
			this.chartEvents = {
				click: function(e) {
					let i = e.dataIndex,
						startTime = self.errorJsByTimeList[i]['key'];
					let endTime = startTime + self.duration;
					self.$emit('showTable', {id: '', startTime: startTime, endTime: endTime});
				}
			};
		}
	};
</script>
<style>
	.chart-tit{
		padding: 10px;
		font-size:20px;
		color:#333;
	}
	.chart{
		border:1px dashed #ddd;
	}
</style>
