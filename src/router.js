import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/home.vue'
import About from './pages/about.vue'

export const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/about',
			name: 'about',
			component: About,
		},
	],
})
