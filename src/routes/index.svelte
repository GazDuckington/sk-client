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
<div class="lg:min-w-[60vw] min-w-[90vw] p-5">
	{#if !load}
		<InputData on:submit={handleSubmit} />
	{:else if !promise}
		<div />
	{:else}
		<div>
			{#await promise}
				<Spinner />
			{:then result}
				<button on:click|preventDefault={() => (load = !load)}>input lagi</button>
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
</div>

<style lang="postcss">
	div button {
		@apply rounded-lg p-1 border-2 font-semibold mb-2;
		@apply bg-cyan-200 border-cyan-500 text-cyan-500;
		@apply dark:bg-cyan-300 dark:border-cyan-600 dark:text-cyan-600;
		@apply hover:bg-cyan-100 hover:border-cyan-400 hover:text-cyan-400;
		@apply dark:hover:bg-cyan-200 dark:hover:border-cyan-500 dark:hover:text-cyan-500;
	}
</style>
