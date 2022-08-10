<script lang="ts">
	import SkorPerKata from '$components/SkorPerKata.svelte';
	export let detail: Array<any>;
</script>

{#each detail as det}
	<tr>
		<td>
			{det.kalimat}
		</td>
		<td class="text-center">
			<span class={det.label > 0 ? 'biru' : 'merah'}>
				{det.skor}
			</span>
		</td>
		<td>
			<SkorPerKata detail={det.perkata} />
		</td>
	</tr>
{/each}

<style lang="postcss" global>
	.biru,
	.merah {
		@apply px-2 py-1 font-semibold leading-tight rounded-md;
	}
	.biru {
		@apply text-blue-600 bg-blue-200;
		@apply text-blue-900 dark:bg-blue-400;
	}

	.merah {
		@apply text-rose-600 bg-rose-200;
		@apply text-rose-900 dark:bg-rose-400;
	}
</style>
