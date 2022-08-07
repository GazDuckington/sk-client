<script lang="ts">
	import TabelPred from '$components/TabelPred.svelte';
	import { postFetcher } from '$lib/fetcher';
	import theme from '$lib/stores';
	import '../app.css';

	const baseUrl = 'https://gzback.herokuapp.com/api/';
	let testPost = postFetcher(baseUrl + 'predict/', 'produk jelek tapi murah. pegawai ramah.');
	$: console.log(testPost);
</script>

<svelte:head>
	<title>home</title>
</svelte:head>
<div class={$theme}>

<TabelPred promise={testPost} />
</div>

<style lang="postcss">
</style>
