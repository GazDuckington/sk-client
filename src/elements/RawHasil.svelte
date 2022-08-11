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
	<textarea bind:value={resValue} />
	<div>
		<button
			on:click|preventDefault={copyHasil}
			class="rounded-full border 
		border-cyan-600 text-cyan-600 hover:text-cyan-500 hover:border-cyan-500"
		>
			<IconClip />
		</button>
	</div>
</div>

<style lang="postcss">
</style>
