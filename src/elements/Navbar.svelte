<script lang="ts">
	import { page } from '$app/stores';
	import ThemeSwitcher from '$elements/ThemeSwitcher.svelte';
</script>

<div class="nav flex flex-row p-1 rounded-b-md justify-between">
	<ThemeSwitcher />
</div>

<style lang="postcss" global>
	.nav {
		@apply bg-gray-900 dark:bg-gray-100;
	}
</style>
