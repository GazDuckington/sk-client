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

<div class={$theme}>
	<div class="gap-0 flex flex-col">
		<ThemeSwitcher />
	</div>
	<slot />
</div>

<style lang="postcss" global>
	* {
		transition: background-color 0.3s;
		transition: color 0.3s;
	}
	:global(body) {
		@apply bg-gray-50 text-gray-900;
	}
	:global(body.dark) {
		@apply bg-gray-900 text-gray-50;
	}
	.biru {
		@apply dark:text-blue-500 text-blue-400;
	}
	.merah {
		@apply dark:text-rose-500 text-rose-400;
	}
</style>
