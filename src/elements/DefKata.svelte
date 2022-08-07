<script lang="ts">
	export let kata: string;
	export let pred: number;
	export let freq: number;
	let showDef = false;
	$: isPos = pred > 0;
</script>

{#if showDef}
	<div on:click={() => (showDef = !showDef)} class="bg-grey-50 absolute">
		skor: {pred}
		freq: {freq}
	</div>
{/if}
<p on:click={() => (showDef = !showDef)} class={isPos ? 'biru' : 'merah'}>
	{kata}
</p>

<style lang="postcss">
	@import '../app.css';
	p {
		@apply rounded-md p-1 self-center shadow-md border-2 text-white;
	}
	.biru {
		@apply bg-blue-700 border-blue-600;
	}
	.merah {
		@apply bg-red-500 border-red-600;
	}
</style>
