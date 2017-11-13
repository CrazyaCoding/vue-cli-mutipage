/**
 * Created by shangpanpan on 2017/11/10.
 */
import * as types from './../mutation-types';
/*****************mock api**********************/
import {getErrorJsByTimeList, getJsErrorTableListByTime, getJsErrorDetail} from './../../mock/mistakeshow';
/*******************api************************/
//import {getErrorJsByTimeList, getJsErrorTableListByTime, getJsErrorDetail} from './../../api/mistakeshow';

const state = {
	/***mistakeshow***/
	errorJsByTimeList: [], // 报错图标数据
	duration: 300, //默认时间间隔
	startTime: null,
	endTime: null, //默认结束时间 距离起始时间 差半个小时
	interval: '5m', //默认图表分段时间间隔  eg: 1y(1年),5M(5个月),2w(两周),7d(7天),1h(1个小时),5m(五分钟)
	/***table***/
	errorJsTableListByTime: [],
	tableStartTime: null, //table数据起始时间
	tableEndTime: null, //table数据结束时间
	isShowTable: false, //表格的显示隐藏
	/*Js error detail pop*/
	jsErrorDetail: [],
	isShowPop: false
};
const getters = {
	errorJsByTimeList: state => state.errorJsByTimeList,
	duration: state => state.duration,
	startTime: state => {
		if (!state.startTime) {
			return new Date().getTime();
		}
	},
	endTime: state => {
		if (!state.endTime) {
			return new Date().getTime() - 30 * 60;
		}
	},
	interval: state => state.interval,
	/***table***/
	errorJsTableListByTime: state => state.errorJsTableListByTime,
	tableStartTime: state => state.tableStartTime || state.startTime,
	tableEndTime: state => state.tableEndTime || state.tableEndTime,
	isShowTable: state => state.isShowTable,
	/*Js error detail pop*/
	jsErrorDetail: state => state.jsErrorDetail,
	isShowPop: state => state.isShowPop
};
const actions = {
	//获取一段时间内的所有报错
	getErrorJsByTime({commit, state}, pre) {
		getErrorJsByTimeList(pre.result).then(result => {
			if (result.success === true) {
				commit({
					type: types.GET_ERRORLISTBYTIME,
					result: result.data
				});
			}
		});
	},
	//获取表格数据，图表分段时间报错
	getJsErrorTableListByTime({commit, state}, pre) {
		getJsErrorTableListByTime(pre.result).then(result => {
			if (result.success === true) {
				commit({
					type: types.CHANGE_ERRORJSTABELLIST,
					result: result.data
				});
			}
		});
	},
	getJsErrorDetail({commit, state}, pre) {
		getJsErrorDetail(pre.result).then(result => {
			if (result.success === true) {
				commit({
					type: types.CHANGE_JSERRORDETAIL,
					result: result.data
				});
			}
		});
	}
};
const mutations = {
	[types.GET_ERRORLISTBYTIME](state, pre) {
		state.errorJsByTimeList = pre.result;
	},
	[types.CHANGE_ERRORJSTABELLIST](state, pre) {
		state.errorJsTableListByTime = pre.result;
	},
	[types.CHANGE_TABLEDISPLAY](state, pre) {
		state.isShowTable = pre.result;
	},
	[types.CHANGE_JSERRORDETAIL](state, pre) {
		state.jsErrorDetail = pre.result;
	},
	[types.CHANGE_POPDISPLAY](state, pre) {
		state.isShowPop = pre.result;
	}
};

export default {
	state,
	getters,
	actions,
	mutations
};
