<script lang="ts">
	import IconClip from './IconClip.svelte';

	export let result: Promise<any>;
	let resValue = JSON.stringify({ result });

	function copyHasil() {
		navigator.clipboard.writeText(resValue);
		alert('Hasil analisis telah tersimpan dalam clipboard');
	}
</script>

<div class="flex flex-col gap-1">
	<textarea bind:value={resValue} rows="10" />
	<div>
		<button on:click|preventDefault={copyHasil}>
			<IconClip />
		</button>
	</div>
</div>

<style lang="postcss">
	div button {
		@apply rounded-full p-1 border-2 font-semibold mb-2;
		@apply bg-green-200 border-green-500 text-green-500;
		@apply dark:bg-green-300 dark:border-green-600 dark:text-green-600;
		@apply hover:bg-green-100 hover:border-green-400 hover:text-green-400;
		@apply dark:hover:bg-green-200 dark:hover:border-green-500 dark:hover:text-green-500;
	}
</style>
