<script lang="ts">
	import IconClip from './IconClip.svelte';

	export let result: Promise<any>;
	function copyHasil() {
		document.querySelector('textarea')?.select();
		document.execCommand('copy');
		alert('Hasil analisis telah tersimpan dalam clipboard');
	}
	let resValue = JSON.stringify({ result });
</script>

<div class="flex flex-col gap-1">
	<div class="text-blue-800 text-left align-middle flex gap-1">
		<button on:click|preventDefault={copyHasil}>
			<IconClip />
		</button>
		<div>
			copy ke <i>clipboard</i>.
		</div>
	</div>

	<textarea bind:value={resValue} />
</div>

<style lang="postcss">
	textarea {
		@apply min-h-[20rem] min-w-[30em];
	}
</style>
