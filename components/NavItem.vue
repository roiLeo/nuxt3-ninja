<template>
	<a
		:href="href"
		:class="isActive ? 'font-semibold text-gray-800 dark:text-gray-200' : 'font-normal text-gray-600 dark:text-gray-400'"
        class="hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
      >
        <span className="capsize">{{text}}</span>
      </a>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
	props: [
		'href',
		'text'
	],
	data: () => ({isActive: false}),
	setup() {
		const route = useRoute()
		const routeName = computed(() => route.name)
		return { routeName }
	},
	created() {
		this.isActive = this.routeName === this.href.replace('/', '') 
	}
})
</script>
