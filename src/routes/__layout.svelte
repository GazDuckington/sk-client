<script lang="ts">
	import DefKata from '$components/DefKata.svelte';
	import ThemeSwitcher from '$elements/ThemeSwitcher.svelte';
	import '../app.css';

	import getFetcher, { postFetcher } from '$lib/fetcher';
	import { logs, theme } from '$lib/stores';
	import { onMount } from 'svelte';

	const baseUrl = 'https://gzback.herokuapp.com/api/';

	onMount(async () => {
		if ($logs.logprior == 0 || $logs.logprior.length < 1) {
			$logs.logprior = await getFetcher(baseUrl + 'logs/prior');
		}
		if ($logs.loglikelihood.length < 1) {
			$logs.loglikelihood = await getFetcher(baseUrl + 'logs/likelihoods');
		}
	});

	$: prior = $logs.logprior;
	$: likelihoods = JSON.stringify($logs.loglikelihood);
	$: isDark = $theme === 'dark';
</script>

<div class:dark={isDark}>
	<div class="relative">
		{prior}
		<ThemeSwitcher />
		<slot />
		<br />
		test
		<DefKata kata="mudik" />
		<hr />
		{#if !likelihoods}
			loading ...
		{:else}
			<input value={likelihoods} />
		{/if}
	</div>
</div>

<style lang="postcss">
	* {
		@apply dark:bg-dark-bg;
	}
</style>
