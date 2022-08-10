<script lang="ts">
	import { page } from '$app/stores';
	// todo: add about pages for cv
	const nav = [
		{ title: 'Home', path: '/' },
		{ title: 'About', path: '/about' }
	];
</script>

<nav class="flex flex-row gap-2">
	{#each nav as item}
		<a href={item.path} class="navi" class:active={$page.url.pathname === item.path}>
			{item.title}
		</a>
	{/each}
</nav>

<style lang="postcss" global>
	a.navi {
		@apply font-semibold flex flex-col;
		@apply dark:hover:text-cyan-600 hover:text-cyan-500;
	}
	a.active {
		@apply text-cyan-500 border-b-2 border-cyan-500;
	}
</style>
