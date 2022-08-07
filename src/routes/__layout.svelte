<script lang="ts">
	import '../app.css';

	import ThemeSwitcher from '$elements/ThemeSwitcher.svelte';
	import getFetcher from '$lib/fetcher';
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
</script>

<hr />
<ThemeSwitcher />
<div class="{$theme} grid place-content-center">
	<div>
		<slot />
	</div>
</div>

<style lang="postcss">
	* {
		@apply dark:bg-dark-bg bg-light-bg;
		@apply dark:text-dark-fg text-light-fg;
	}
</style>
