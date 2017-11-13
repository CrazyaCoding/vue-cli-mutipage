/**
 * Created by shangpanpan on 2017/11/10.
 */
import Vue from 'vue';
import Vuex from 'vuex';

import mistakeshow from './modules/mistakeshow';

Vue.use(Vuex);
export default new Vuex.Store({
	modules: {
		mistakeshow
	}
});
