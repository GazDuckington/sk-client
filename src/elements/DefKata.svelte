<script lang="ts">
	export let kata: string;
	export let pred: number;
	export let freq: number;
	let showDef = false;
	$: isPos = pred > 0;

	import { logs } from '$lib/stores';
	let likely = $logs.loglikelihood;

	let detailKata: any[] = [];
	for (let i = 0; i < likely.length; i++) {
		if (likely[i].kata == kata) {
			detailKata.push(likely[i]);
		}
	}
</script>

{#if showDef}
	<div
		on:click|stopPropagation={() => (showDef = !showDef)}
		class="detail {isPos ? 'biru' : 'merah'}"
	>
		<div>
			skor: {pred}
		</div>
		<div>
			freq: {freq}
		</div>
		<div>
			{#if detailKata.length > 0}
				{#each detailKata as item}
					likelihood: {item['likelihood'].toFixed(4)}
				{/each}
			{:else}
				likelihood: N/A
			{/if}
		</div>
	</div>
{/if}
<span on:click|stopPropagation={() => (showDef = !showDef)} class="{isPos ? 'biru' : 'merah'} kata">
	{kata}
</span>

<style lang="postcss" global>
	span {
		@apply px-2 py-1 font-semibold leading-tight;
	}
	span.kata.merah {
		@apply hover:text-rose-100 hover:bg-rose-600 dark:hover:text-rose-500;
	}
	span.kata.biru {
		@apply hover:text-blue-100 hover:bg-blue-600 dark:hover:text-blue-500;
	}
	.detail {
		@apply flex flex-col absolute rounded-lg shadow-md font-light border;
	}
	.detail.biru {
		@apply dark:text-blue-600 dark:bg-blue-200 border-blue-700;
		@apply text-blue-800 bg-blue-400 dark:border-blue-800;
	}

	.detail.merah {
		@apply dark:text-rose-600 dark:bg-rose-200 border-red-700;
		@apply text-rose-800 bg-rose-400 dark:border-red-800;
	}
</style>
