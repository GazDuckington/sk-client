<script lang="ts">
	import '../app.css';
	import ThemeSwitcher from '$elements/ThemeSwitcher.svelte';

	import { logs, theme } from '$lib/stores';
	import getFetcher from '$lib/fetcher';
	import { onMount } from 'svelte';

	const baseUrl = 'http://127.0.0.1:5000/api/';

	onMount(async () => {
		if ($logs.logprior == 0) {
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
	{prior}
	<ThemeSwitcher />
	<slot />
	<br />
	<hr />
	{#if !likelihoods}
		loading ...
	{:else}
		{likelihoods}
	{/if}

</div>
