import { createRouter, createWebHistory } from 'vue-router'

//import views component
import Home from '../views/Home.vue'
import View from '../views/View.vue'

//Routes
const routes = [
	{
		name: 'home',
		path: '/',
		component: Home
	},
	{
		name: 'view',
		path: '/view',
		component: View
	}
]

//Init router
const router = createRouter({ history: createWebHistory(process.env.BASE_URL), routes })

export default router
