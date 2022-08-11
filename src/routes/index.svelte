<script lang="ts">
	import TabelPred from '$components/TabelPred.svelte';
	import InputData from '$elements/InputData.svelte';
	import RawHasil from '$elements/RawHasil.svelte';
	import Spinner from '$elements/Spinner.svelte';
	import { postFetcher } from '$lib/fetcher';

	const baseUrl = 'https://gzback.herokuapp.com/api/';

	let load = false;
	let raw = false;
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
	<title>home</title>
</svelte:head>

<!-- !! start of content -->
{#if !load}
	<InputData on:submit={handleSubmit} />
{:else if !promise}
	<div />
{:else}
	<div>
		{#await promise}
			<Spinner />
		{:then result}
			{#if raw}
				<button on:click={() => (raw = !raw)}>table</button>
				<RawHasil {result} />
			{:else}
				<button on:click={() => (raw = !raw)}>json</button>
				<TabelPred {promise} />
			{/if}
		{/await}
	</div>
{/if}

<style lang="postcss">
	p {
		@apply text-left;
		@apply dark:text-slate-100;
	}
</style>
