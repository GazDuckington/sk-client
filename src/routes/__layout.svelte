<script lang="ts">
	import '../app.css';
	import theme from '$lib/stores';
	$: isDark = $theme === 'dark';
	import ThemeSwitcher from '$elements/ThemeSwitcher.svelte';

	import { logprior, loglikelihood } from '$lib/stores';
	import getFetcher from '$lib/fetcher';
	import { onMount } from 'svelte';
	import { onDestroy } from 'svelte';

	const baseUrl = 'http://127.0.0.1:5000/api/';

	function isLocalEmpty(key: string) {
		try {
			localStorage.setItem(key, key);
			localStorage.removeItem(key);
			return true;
		} catch (err) {
			return false;
		}
	}

	async function fillLocalPrior() {}

	onMount(async() => {
		// fillLocalPrior;
		if ($logprior.length <= 0) {
			$logprior = await getFetcher(baseUrl + 'logs/prior');
		}
	});

	$: console.log($logprior.length < 1);
</script>

<div class:dark={isDark}>
	{$logprior}
	<ThemeSwitcher />
	<slot />
	<br />
	<hr />
	<!-- {#await $loglikelihood}
		load likely...
	{:then datas}
		{datas}
		{#each datas as data}
			{data}
		{/each}
	{/await} -->
</div>
