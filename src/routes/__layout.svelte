<script lang="ts">
	import '../app.css';

	import Navbar from '$components/Navbar.svelte';
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
	<div class="max-w-2xl text-center">
		<slot />
	</div>
</div>

<style lang="postcss" global>
	:global(*) {
		transition: background-color 0.3s;
		transition: color 0.3s;
	}
	:global(body) {
		@apply bg-gradient-to-tr from-[#d8dee9] via-[#e5e9f0] to-[#eceff4];
		@apply text-gray-900;
	}
	:global(body.dark) {
		@apply bg-gradient-to-tr from-[#2e3440] via-[#434c5e] to-[#4c566a];
		@apply text-gray-100;
	}
</style>
