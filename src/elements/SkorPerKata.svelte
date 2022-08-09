<script lang="ts">
	import { theme } from '$lib/stores';
	export let detail: Array<any>;
</script>

<div class="flex gap-1 {$theme}">
	{#each detail as kata}
		<p class={kata.label > 0 ? 'biru' : 'merah'}>
			{kata.kata}
		</p>
	{/each}
</div>

<style lang="postcss">
</style>
