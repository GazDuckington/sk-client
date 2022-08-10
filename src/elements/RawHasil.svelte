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
	<div
		class="text-blue-800 dark:text-blue-200 
	text-left align-middle flex gap-1"
	>
		<button
			on:click|preventDefault={copyHasil}
			class="rounded-full border 
		border-blue-700 dark:border-blue-200
		dark:hover:border-blue-600 hover:border-blue-500"
		>
			<IconClip />
		</button>
	</div>

	<textarea bind:value={resValue} />
</div>

<style lang="postcss">
	textarea {
		@apply min-h-[20rem] min-w-[30em];
	}
</style>
