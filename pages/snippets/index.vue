<template>
	<div
		class="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16"
	>
		<h1
			class="
				mb-4
				text-3xl
				font-bold
				tracking-tight
				text-black
				md:text-5xl
				dark:text-white
			"
		>
			Code Snippets
		</h1>
		<p class="mb-4 text-gray-600 dark:text-gray-400">
			These are a collection of code snippets I've used in the past and
			saved. It include anything from random CSS snippets to
			Node.js scripts.
		</p>
		<div class="grid w-full grid-cols-1 gap-4 my-2 mt-4 sm:grid-cols-2">
			<CardSnippet />
			<CardSnippet />
		</div>
	</div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
	setup() {

	},
})
</script>