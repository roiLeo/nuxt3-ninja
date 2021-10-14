import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
	buildModules: [
		'nuxt-windicss',
	],
	css: [
		'virtual:windi.css',
		// '@/assets/css/main.css'
	],
})