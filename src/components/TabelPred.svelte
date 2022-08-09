<script lang="ts">
	import SkorPerKalimat from '$components/SkorPerKalimat.svelte';
	import TotalSkor from '$elements/TotalSkor.svelte';
	import '../app.css';

	export let promise: Promise<any>;
</script>

{#await promise}
	loading ...
{:then hasilPost}
	{#each hasilPost as hp}
		<!-- <TotalSkor hasil={hp.total} /> -->
		<div class="overflow-x-auto mb-8 w-full overflow-hidden rounded-md shadow-lg">
			<table class="w-full">
				<thead>
					<tr class="text-md font-semibold tracking-wide text-center uppercase">
						<th>kalimat</th>
						<th>skor</th>
						<th>detail</th>
					</tr>
				</thead>
				<tbody>
					<SkorPerKalimat detail={hp.detail} />
				</tbody>
			</table>
		</div>
	{/each}
{:catch error}
	{error}
{/await}

<style lang="postcss" global>
	th {
		@apply text-gray-100 bg-gray-500 dark:text-gray-500 dark:bg-gray-100;
	}
	td {
		@apply border-l border-t;
		@apply dark:text-gray-100 dark:bg-gray-500 text-gray-500 bg-gray-50;
	}
	th,
	td {
		@apply px-4 py-3;
		@apply border-gray-200 dark:border-gray-100;
	}
</style>
