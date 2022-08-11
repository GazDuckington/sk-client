<script lang="ts">
	import SkorPerKalimat from '$components/SkorPerKalimat.svelte';

	export let promise: Promise<any>;
</script>

<div class="overflow-x-auto w-full rounded-md shadow-lg">
	{#await promise}
		loading ...
	{:then hasilPost}
		{#each hasilPost as hp}
			<table class="w-full">
				<thead>
					<tr>
						<th>kalimat</th>
						<th>skor</th>
						<th>detail</th>
					</tr>
				</thead>
				<tbody>
					<SkorPerKalimat detail={hp.detail} />
				</tbody>
			</table>
		{/each}
	{:catch error}
		{error}
	{/await}
</div>

<style lang="postcss" global>
	th {
		/* @apply dark:bg-slate-900; */
		@apply bg-slate-900 text-slate-300;
	}
	td {
		@apply border-l border-t;
		@apply dark:text-slate-100 dark:bg-slate-500 text-slate-500 bg-slate-50;
	}
	th,
	td {
		@apply px-4 py-3;
		@apply border-slate-200 dark:border-slate-100;
	}
</style>
