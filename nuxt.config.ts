export default defineNuxtConfig({
	modules: ['nuxt-windicss', '@vueuse/nuxt'],
	router: {
		options: {
			linkActiveClass: 'font-semibold text-gray-800 dark:text-gray-200',
			linkExactActiveClass: 'font-semibold text-gray-800 dark:text-gray-200'
		}
	}
	// ssr: false,
})