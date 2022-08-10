<script lang="ts">
	import TabelPred from '$components/TabelPred.svelte';
	import InputData from '$elements/InputData.svelte';
	import RawHasil from '$elements/RawHasil.svelte';
	import Spinner from '$elements/Spinner.svelte';
	import { postFetcher } from '$lib/fetcher';
	import '../app.css';

	const baseUrl = 'https://gzback.herokuapp.com/api/';
	// let testPost = postFetcher(baseUrl + 'predict/', 'produk jelek jelek tapi murah. pegawai ramah.');

	let load = false;
	let promise: Promise<any>;
	let result: Promise<any>;

	function handleSubmit(e: { detail: any }) {
		//! delete address:port before build
		const url = baseUrl + 'predict/';
		let data = e.detail;
		if (data) {
			promise = postFetcher(url, data);
			load = !load;
		}
	}
	// $: console.log(testPost);
</script>

<svelte:head>
	<title>home</title>
</svelte:head>
<p class="lead prose text-left">Input kalimat:</p>
<InputData on:submit={handleSubmit} />
{#if !promise}
	<div class="belum" />
{:else}
	{#await promise}
		<Spinner />
	{:then result}
		<p class="lead prose text-left mb-1">Hasil analisis:</p>
		<TabelPred {promise} />
		<RawHasil {result} />
	{/await}
{/if}

<style lang="postcss">
</style>
