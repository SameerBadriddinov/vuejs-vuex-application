import {createRouter, createWebHistory} from 'vue-router'
import {HomeView, RegisterView, LoginView, ArticleDetailView} from '@/views'

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
		{
			path: '/article/:slug',
			name: 'article-details',
			component: ArticleDetailView,
		},
	],
})

export default router
