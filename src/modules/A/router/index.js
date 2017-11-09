/**
 * Created by shangpanpan on 2017/11/8.
 */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
export default new Router({
	routers: [
		{
			path: '/',
			name: 'A',
			components: Hello
		}
	]
})
