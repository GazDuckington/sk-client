<script lang="ts">
	import { page } from '$app/stores';
	// todo: add about pages for cv
	const nav = [{ title: 'Home', path: '/' }];
</script>

<nav>
	<ul>
		{#each nav as item}
			<li>
				<a href={item.path} class="navi" class:active={$page.url.pathname === '/'}>
					{item.title}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style lang="postcss" global>
	a.navi {
		@apply font-semibold;
		@apply dark:hover:text-blue-600 hover:text-blue-500;
	}
	a.active {
		@apply text-[#2e3440] dark:text-[#d8dee9];
	}
</style>
