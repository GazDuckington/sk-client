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
	<textarea bind:value={resValue} />
</div>

<style lang="postcss">
</style>
