import {createRouter, createWebHistory} from 'vue-router'
import {HomeView, RegisterView, LoginView} from '@/views'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/register',
			name: 'register',
			component: RegisterView,
		},
		{
			path: '/login',
			name: 'login',
			component: LoginView,
		},
	],
})

export default router
