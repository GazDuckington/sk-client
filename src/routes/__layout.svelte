<script lang="ts">
	import '../app.css';

	import Navbar from '$components/Navbar.svelte';
	import Footer from '$elements/Footer.svelte';
	import getFetcher from '$lib/fetcher';
	import { logs } from '$lib/stores';
	import { onMount } from 'svelte';

	const baseUrl = 'https://gzback.herokuapp.com/api/';

	onMount(async () => {
		// window.document.body.classList.add('dark');

		if ($logs.logprior == 0 || $logs.logprior.length < 1) {
			$logs.logprior = await getFetcher(baseUrl + 'logs/prior');
		}
		if ($logs.loglikelihood.length < 1) {
			$logs.loglikelihood = await getFetcher(baseUrl + 'logs/likelihoods');
		}
	});
</script>

<div class="w-screen">
	<Navbar />

	<div class="flex mb-5 mt-5 justify-center w-screen h-screen">
		<div class="lg:min-w-[50vw] min-w-[90vw] p-5">
			<slot />
		</div>
	</div>

	<Footer />
</div>

<style lang="postcss">
	:global(body) {
		@apply bg-slate-200 text-slate-800;
	}
	:global(body.dark) {
		@apply bg-slate-800 text-slate-100;
	}
	:global(*) {
		transition: background-color 0.3s;
		transition: color 0.3s;
	}
</style>
