<script lang="ts">
	import SkorPerKata from '$elements/SkorPerKata.svelte';
	export let detail: Array<any>;
</script>

{#each detail as det}
	<tr>
		<td>
			{det.kalimat}
		</td>
		<td class={det.label > 0 ? 'biru' : 'merah'}>
			<p>
				{det.skor}
			</p>
		</td>
		<td class="w-[30em] sm:w-[15em] text-center">
			<SkorPerKata detail={det.perkata} />
		</td>
	</tr>
{/each}

<style lang="postcss">
	.biru {
		@apply dark:text-dark-blue text-light-blue;
	}
	.merah {
		@apply dark:text-dark-red text-light-red;
	}
</style>
