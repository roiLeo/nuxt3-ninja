<template>
	<div
		class="
			flex flex-col
			justify-center
			items-start
			max-w-2xl
			border-gray-200
			dark:border-gray-700
			mx-auto
			pb-16
		"
	>
		<div class="flex flex-col-reverse sm:flex-row items-start">
			<div class="flex flex-col pr-8">
				<h1
					class="
						font-bold
						text-3xl
						md:text-5xl
						tracking-tight
						mb-2
						text-black
						dark:text-white
					"
				>
					Leo 🦁
				</h1>
				<h2 class="text-gray-700 dark:text-gray-200 mb-4">
					I make stuff for the 
					<span class="font-semibold">Web</span>
				</h2>
				<p class="text-gray-600 dark:text-gray-400 mb-16">
					Right now you can find me hacking away primarily with Vue.js, Nuxt.js, Gridsome, GraphQL and in general anything JavaScript, HTML and (S)CSS related. 
				</p>
			</div>
			<div class="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
				<!-- ADD FUN HERE -->
				<MouseTrackingEye />
				<!-- NO FUN YET -->
			</div>
		</div>
	</div>
</template>
