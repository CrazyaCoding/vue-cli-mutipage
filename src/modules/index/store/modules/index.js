/**
 * Created by shangpanpan on 2017/11/9.
 */
import * as types from './../mutation-types';
/*****************mock api**********************/
import {getPagesByPageNumber} from './../../mock/index';

/*******************api************************/
//import {getPagesByPageNumber} from './../../api/modules';

const state = {
	pages: []
};
const getters = {
	pages: state => state.pages
};
const actions = {
	getPagesByPageNumber({commit, state}, pre) {
		getPagesByPageNumber(pre.result).then(result => {
			if (result.success === true) {
				commit({
					type: types.GET_ALLPAGES,
					result: result.data
				});
			} else {
				console.log('统一处理');
			}
		});
	}
};
const mutations = {
	[types.GET_ALLPAGES](state, pre) {
		state.pages = pre.result;
	}
};

export default {
	state,
	getters,
	actions,
	mutations
};
