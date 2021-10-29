<template>
	<button
		class="burger visible md:hidden"
		aria-label="Toggle menu"
		type="button"
		@click="toggleMenu"
	>
		<svg
			:data-hide="isMenuOpen"
			class="h-5 w-5 absolute text-gray-900 dark:text-gray-100"
			width="20"
			height="20"
			viewBox="0 0 20 20"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
			fill="none"
		>
			<path d="M2.5 7.5H17.5" />
			<path d="M2.5 12.5H17.5" />
		</svg>

		<svg
			:data-hide="!isMenuOpen"
			class="h-5 w-5 absolute text-gray-900 dark:text-gray-100"
			viewBox="0 0 24 24"
			width="24"
			height="24"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
			fill="none"
			shapeRendering="geometricPrecision"
		>
			<path d="M18 6L6 18" />
			<path d="M6 6l12 12" />
		</svg>
	</button>
	<ul
		v-show="isMenuOpen"
		class="menu menuRendered flex flex-col absolute bg-gray-100 dark:bg-gray-900"
	>
		<li
			class="
				border-b border-gray-300
				dark:border-gray-700
				text-gray-900
				dark:text-gray-100
				text-sm
				font-semibold
			"
		>
			<NuxtLink to="/" class="flex w-auto pb-4"> Home </NuxtLink>
		</li>
		<li
			class="
				border-b border-gray-300
				dark:border-gray-700
				text-gray-900
				dark:text-gray-100
				text-sm
				font-semibold
			"
		>
			<NuxtLink to="/uses" class="flex w-auto pb-4"> Uses </NuxtLink>
		</li>
		<li
			class="
				border-b border-gray-300
				dark:border-gray-700
				text-gray-900
				dark:text-gray-100
				text-sm
				font-semibold
			"
		>
			<NuxtLink to="/blog" class="flex w-auto pb-4"> Blog </NuxtLink>
		</li>
		<li
			class="
				border-b border-gray-300
				dark:border-gray-700
				text-gray-900
				dark:text-gray-100
				text-sm
				font-semibold
			"
		>
			<NuxtLink to="/snippets" class="flex w-auto pb-4">
				Snippets
			</NuxtLink>
		</li>
	</ul>
</template>

<script lang="ts">
import { defineComponent, ref, nextTick } from 'vue'

export default defineComponent({
	setup() {
		const isMenuOpen = ref<boolean>(false)

		const toggleMenu = () => {
			nextTick(() => {
				if (isMenuOpen.value) {
					document.body.style.overflow = '';
				} else {
					document.body.style.overflow = 'hidden';
				}
				isMenuOpen.value = !isMenuOpen.value
			})
		}

		return {
			isMenuOpen,
			toggleMenu
		}
	},
})
</script>

<style>
.burger {
	transition: opacity 300ms ease;
	border: 0;
	background: transparent;
	width: 40px;
	height: 40px;
	position: relative;
}

.burger svg {
	transform: translate(-50%, -50%) scale(1);
	top: 50%;
	left: 50%;
	opacity: 1;
	transition: opacity 300ms ease, transform 300ms ease;
}

.burger svg[data-hide='true'] {
	opacity: 0;
	transform: translate(-50%, -50%) scale(0);
}

.menu {
	padding: 0 28px 0 4px;
	margin: 0;
	padding-top: 24px;
	width: 100%;
	height: 100vh;
	z-index: 1000;
	opacity: 0;
	left: 0;
	transition: opacity 300ms ease, transform 300ms ease;
}

.menu li {
	transform: translateX(-16px);
	opacity: 0;
	transition: opacity 300ms ease, transform 300ms ease, width 300ms ease,
		border-color 300ms ease;
	width: 0px;
	white-space: nowrap;
}

.menuRendered {
	opacity: 1;
}

.menuRendered li {
	@apply border-gray-200 dark:border-gray-600 w-full;
	transform: translateX(0);
	opacity: 1;
}

.menu > * + * {
	margin-top: 24px;
}

@keyframes grow {
	0% {
		height: 0px;
	}
	100% {
		height: 24px;
	}
}
</style>

