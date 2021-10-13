<template>
	<footer
		class="
			flex flex-col
			justify-center
			items-start
			max-w-2xl
			mx-auto
			w-full
			mb-8
		"
	>
		<hr class="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />

		<div
			class="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3"
		>
			<div class="flex flex-col space-y-4">
				<a href="/" class="text-gray-500 hover:text-gray-600 transition"
					>Home</a
				>
				<a
					href="/about"
					class="text-gray-500 hover:text-gray-600 transition"
				>
					About
				</a>
			</div>
			<div class="flex flex-col space-y-4">
				<div class="text-gray-500 hover:text-gray-600 transition">weird flex</div>
				<div class="text-gray-500 hover:text-gray-600 transition">but ok</div>
			</div>
			<div class="flex flex-col space-y-4">
				<a
					href="/uses"
					class="text-gray-500 hover:text-gray-600 transition"
					>Uses</a
				>
				<a
					href="/snippets"
					class="text-gray-500 hover:text-gray-600 transition"
				>
					Snippets
				</a>
			</div>
		</div>
	</footer>
</template>