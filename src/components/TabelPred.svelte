<script lang="ts">
	import SkorPerKalimat from '$components/SkorPerKalimat.svelte';
	import TotalSkor from '$elements/TotalSkor.svelte';
	import { theme } from '$lib/stores';
	import '../app.css';

	export let promise: Promise<any>;
</script>

<div class="p-2 {$theme}">
	{#await promise}
		loading ...
	{:then hasilPost}
		{#each hasilPost as hp}
			<!-- <TotalSkor hasil={hp.total} /> -->
			<table>
				<tr>
					<th>kalimat</th>
					<th>skor</th>
					<th>detail</th>
				</tr>
				<SkorPerKalimat detail={hp.detail} />
			</table>
		{/each}
	{:catch error}
		{error}
	{/await}
</div>

<style lang="postcss" global>
	table,
	th,
	td {
		@apply p-1 table-auto rounded-md border-separate border-spacing-1 border;
		@apply dark:bg-slate-700 dark:text-gray-50 text-gray-500;
	}
</style>
