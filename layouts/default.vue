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

<script setup>
useHead({
  bodyAttrs: {
    class: 'bg-white dark:bg-black text-white dark:text-black'
  }
})
</script>

<style>
@windicss base;
@windicss components;
@windicss utilities;

::selection {
  background-color: #47a3f3;
  color: #fefefe;
}

html {
  min-width: 360px;
  scroll-behavior: smooth;
}

#__nuxt {
  @apply bg-gray-50 dark:bg-gray-900;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>