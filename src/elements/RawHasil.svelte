<script lang="ts">
	import IconClip from './IconClip.svelte';

	export let result: Promise<any>;
	let resValue = JSON.stringify({ result });

	function copyHasil() {
		navigator.clipboard.writeText(resValue);
		alert('Hasil analisis telah tersimpan dalam clipboard');
	}
</script>

<p class="lead prose text-left mb-1">Bentuk mentah:</p>

<div class="flex flex-col gap-1">
	<textarea bind:value={resValue} />

	<div class="text-cyan-800 dark:text-cyan-200 flex gap-1">
		<button
			on:click|preventDefault={copyHasil}
			class="rounded-full border 
		border-cyan-700 dark:border-cyan-200
		dark:hover:border-cyan-600 hover:border-cyan-500"
		>
			<IconClip />
		</button>
		Klik <i>icon</i> untuk meng-<i>copy</i> teks.
	</div>
</div>

<style lang="postcss">
	textarea {
		@apply min-h-[20rem] min-w-[30em];
	}
</style>
