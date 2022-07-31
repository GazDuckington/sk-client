<script lang="ts">
	import '../app.css';
	import { options } from "$lib/stores";
	let dark: boolean = true;
</script>

<div class:dark>
	<h1>Hello world!</h1>

	<input bind:value={$options}>
</div>

<style lang="postcss">
</style>
