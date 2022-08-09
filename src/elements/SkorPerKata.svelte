<script lang="ts">
	import DefKata from './DefKata.svelte';

	export let detail: Array<any>;
</script>

<div class="flex gap-1">
	{#each detail as kata}
		<!-- {kata.kata} -->
		<DefKata kata={kata.kata} pred={kata.skor} freq={kata.freq} />
	{/each}
</div>

<style lang="postcss">
</style>
