<script lang="ts">
	import '../app.css';

	import Navbar from '$elements/Navbar.svelte';
	import getFetcher from '$lib/fetcher';
	import { logs } from '$lib/stores';
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

<Navbar />

<div class="relative flex min-h-screen flex-col items-center overflow-hidden py-5">
	<div class="max-w-xl text-center">
		<slot />
	</div>
</div>

<style lang="postcss" global>
	:global(*) {
		transition: background-color 0.3s;
		transition: color 0.3s;
	}
	:global(body) {
		@apply bg-gray-50 text-gray-900;
	}
	:global(body.dark) {
		@apply bg-gray-900 text-gray-50;
	}
</style>
