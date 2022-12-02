export default defineNuxtConfig({
	buildModules: ['@vueuse/nuxt'],
	modules: ['nuxt-windicss'],
	css: [
		// 'virtual:windi.css'
		// '@/assets/css/main.css'
	],
	router: {
		// Not working
		linkActiveClass: 'font-semibold text-gray-800 dark:text-gray-200',
		linkExactActiveClass: 'font-semibold text-gray-800 dark:text-gray-200'
	}
	// ssr: false,
})