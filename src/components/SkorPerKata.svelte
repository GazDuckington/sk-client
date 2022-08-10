<script lang="ts">
	import DefKata from '$elements/DefKata.svelte';

	export let detail: Array<any>;
</script>

<div class="flex flex-wrap gap-1">
	{#each detail as kata}
		<!-- {kata.kata} -->
		<DefKata kata={kata.kata} pred={kata.skor} freq={kata.freq} />
	{/each}
</div>

<style lang="postcss">
</style>
