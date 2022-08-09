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
			{det.skor}
		</td>
		<td>
			<SkorPerKata detail={det.perkata} />
		</td>
	</tr>
{/each}

<style lang="postcss">
</style>
