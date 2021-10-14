<template>
	<div
		class="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16"
	>
		<h1
			class="
				font-bold
				text-3xl
				md:text-5xl
				tracking-tight
				mb-4
				text-black
				dark:text-white
			"
		>
			Blog
		</h1>
		<p class="text-gray-600 dark:text-gray-400 mb-4">
			Sorry, this page is <span class="font-semibold">🚧 under construction 🚧</span>. You can still use the search below
			to filter nothing. Lets <span class="font-bold">Go!</span>
		</p>
		<div class="relative w-full mb-4">
			<input
				aria-label="Search articles"
				type="text"
				placeholder="What are you looking for?"
				class="
					px-4
					py-2
					border border-gray-300
					dark:border-gray-900
					focus:ring-blue-500
					focus:border-blue-500
					block
					w-full
					rounded-md
					bg-white
					dark:bg-gray-800
					text-gray-900
					dark:text-gray-100
				"
			/>
			<svg
				class="
					absolute
					right-3
					top-3
					h-5
					w-5
					text-gray-400
					dark:text-gray-300
				"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
				/>
			</svg>
		</div>
	</div>
</template>