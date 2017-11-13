/**
 * Created by shangpanpan on 2017/11/9.
 */
import Vue from 'vue';
import Router from 'vue-router';
import home from './../views/home/home';
import list from './../views/list/list';
import permission from './../views/permission/permission';
Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: home
		},
		{
			path: '/list',
			name: 'list',
			component: list
		},
		{
			path: '/permission',
			name: 'permission',
			component: permission
		}
	]
});
