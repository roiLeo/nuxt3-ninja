<template>
	<div class="flex flex-col justify-center px-8">
		<nav
			class="
				flex
				items-center
				justify-between
				w-full
				relative
				max-w-2xl
				border-gray-200
				dark:border-gray-700
				mx-auto
				pt-8
				pb-8
				sm:pb-16
				text-gray-900
				bg-gray-50
				dark:bg-gray-900
				bg-opacity-60
				dark:text-gray-100
			"
		>
			<div class="ml-[-0.60rem]">
				<!-- <MobileMenu /> -->
				<NavItem href="/" text="Home" />
				<NavItem href="/uses" text="Uses" />
				<NavItem href="/blog" text="Blog" />
				<NavItem href="/snippets" text="Snippets" />
			</div>

			<ThemeSwitch />
		</nav>
	</div>
</template>
