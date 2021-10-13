<template>
	<div class="bg-gray-50 dark:bg-gray-900">
		<TheNavbar />
		<main
        	class="flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900"
      	>
			<slot />
			<TheFooter />
		</main>
	</div>
</template>

<script lang="ts">
export default {
	head: {
		bodyAttrs: {
			class: 'bg-white dark:bg-black text-white dark:text-black',
		},
	},
}
</script>