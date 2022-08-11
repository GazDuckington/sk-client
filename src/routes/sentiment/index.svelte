<script lang="ts">
	import TabelPred from '$components/TabelPred.svelte';
	import InputData from '$elements/InputData.svelte';
	import RawHasil from '$elements/RawHasil.svelte';
	import Spinner from '$elements/Spinner.svelte';
	import { postFetcher } from '$lib/fetcher';

	const baseUrl = 'https://gzback.herokuapp.com/api/';

	let load = false;
	let promise: Promise<any>;

	function handleSubmit(e: { detail: any }) {
		const url = baseUrl + 'predict/';
		let data = e.detail;
		if (data) {
			promise = postFetcher(url, data);
			load = !load;
		}
	}
</script>

<svelte:head>
	<title>Sentiment</title>
</svelte:head>
<p class="lead prose text-left">Input kalimat:</p>
<InputData on:submit={handleSubmit} />
{#if !promise}
	<div />
{:else}
	{#await promise}
		<Spinner />
	{:then result}
		<div class="">
			<p class="lead prose text-left mb-1">Hasil analisis:</p>
			<TabelPred {promise} />
			<RawHasil {result} />
		</div>
	{/await}
{/if}

<style lang="postcss" global>
	p {
		@apply dark:text-slate-100;
	}
</style>
