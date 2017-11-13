/**
 * Created by shangpanpan on 2017/11/9.
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false;

new Vue({
	el: '#app',
	router: router,
	store: store,
	template: '<App/>',
	components: { App }
});
