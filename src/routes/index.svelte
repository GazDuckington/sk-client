<script lang="ts">
	import TabelPred from '$components/TabelPred.svelte';
	import InputData from '$elements/InputData.svelte';
	import { postFetcher } from '$lib/fetcher';
	import '../app.css';

	const baseUrl = 'https://gzback.herokuapp.com/api/';
	let testPost = postFetcher(baseUrl + 'predict/', 'produk jelek jelek tapi murah. pegawai ramah.');
	$: console.log(testPost);
</script>

<svelte:head>
	<title>home</title>
</svelte:head>
<InputData />
<TabelPred promise={testPost} />

<style lang="postcss">
</style>
