import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let routes = [
	{
		path: '/',
		name: 'Home',
		component: () =>
			import('../views/Home.vue')
	},
	{
		path: '/articals',
		name: 'Artical',
		component: () =>
			import('../views/Artical.vue')
	},
	{
		path: '/artical-detail/:articalId',
		name: 'ArticalDetail',
		component: () =>
			import('../components/Artical/ArticalDetail.vue')
	},
];

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})
