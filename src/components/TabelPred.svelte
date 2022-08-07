<script lang="ts">
	import SkorPerKalimat from '$components/SkorPerKalimat.svelte';
	import TotalSkor from '$elements/TotalSkor.svelte';
	import '../app.css';

	export let promise: Promise<any>;
</script>

<div class="p-2">
	{#await promise}
		loading ...
	{:then hasilPost}
		{#each hasilPost as hp}
			<!-- <TotalSkor hasil={hp.total} /> -->
			<tr class="text-left">
				<th>kalimat</th>
				<th>skor</th>
				<th>detail</th>
			</tr>
			<SkorPerKalimat detail={hp.detail} />
		{/each}
	{:catch error}
		{error}
	{/await}
</div>

<style lang="postcss">
</style>
