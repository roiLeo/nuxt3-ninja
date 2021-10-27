<template>
	<button
		aria-label="Toggle Dark Mode"
		type="button"
		class="
			w-9
			h-9
			bg-gray-200
			rounded-lg
			dark:bg-gray-600
			flex
			items-center
			justify-center
			hover:ring-2
			ring-gray-300
			transition-all
		"
		@click="toggleTheme"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			class="w-5 h-5 text-gray-800 dark:text-gray-200"
		>
			<path
				v-if="resolvedTheme === 'dark'"
				d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
			/>
			<path
				v-else
				d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
			/>
		</svg>
	</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	setup() {
		let resolvedTheme = {}

		// window is not defined
		// if (process.browser) {
		if (typeof window === 'object') {
			console.log('locked and loaded')
			let media = window.matchMedia('not all and (prefers-color-scheme: light)')
			console.log(media)
			if (media.matches)
				document.documentElement.classList.add('dark')
			else
				document.documentElement.classList.add('light')

			resolvedTheme = ref(document.documentElement.className)
		}

		return { resolvedTheme }
	},

	methods: {
		toggleTheme() {
			this.resolvedTheme = this.resolvedTheme === 'dark' ? 'light' : 'dark'
			document.documentElement.className = ''
			document.documentElement.classList.add(this.resolvedTheme)
		},
	},
})
</script>

<style scoped>
svg path {
	stroke-width: 2;
	stroke-linecap: round;
	stroke-linejoin: round;
}
</style>