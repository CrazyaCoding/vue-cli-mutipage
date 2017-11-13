/**
 * Created by shangpanpan on 2017/11/9.
 */
import Vue from 'vue';
import Router from 'vue-router';
import add from './../views/content/add/add';
import analyse from './../views/content/analyse/analyse';
import mistakeshow from './../views/content/mistake/mistakeshow/mistakeshow';
import set from './../views/content/set/set';
Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'mistakeshow',
			component: mistakeshow
		},
		{
			path: '/add',
			name: 'add',
			component: add
		},
		{
			path: '/analyse',
			name: 'analyse',
			component: analyse
		},
		{
			path: '/set',
			name: 'set',
			component: set
		}
	]
});
