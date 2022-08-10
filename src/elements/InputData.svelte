<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	let artikel: string, wrg: string;
	let min = 10;
	let max = 200;
	const dispatch = createEventDispatcher();

	function handleSubmit() {
		if (!artikel) {
			wrg = 'tolong masukan input';
		}

		let isnum = /^\d+$/.test(artikel);
		if (artikel.length < min) {
			wrg = 'Jumlah minimum karakter: ' + min;
		} else if (artikel.length > max) {
			wrg = 'Jumlah maksimum karakter: ' + max;
		} else if (isnum) {
			wrg = 'tolong gunakan karakter alpha-numeric';
		} else {
			dispatch('submit', artikel);
			wrg = '';
		}
	}
</script>

<div class="container min-w-[30em] min-h-[20rem] w-full">
	<form on:submit|preventDefault={handleSubmit} method="post" class="flex flex-col">
		{#if wrg}
			<div class="warning">{wrg}</div>
		{/if}

		<textarea name="data" id="data" cols="30" rows="10" bind:value={artikel} />
		<div class="text-end">
			<button class="submit" type="submit">Submit</button>
		</div>
	</form>
</div>

<style lang="postcss" global>
	textarea {
		@apply resize-none shadow-lg;
		@apply border rounded-md p-2;
		@apply border-slate-600 dark:border-slate-50;
		@apply bg-gray-50 text-gray-500;
		@apply dark:bg-gray-500 dark:text-gray-100;
	}
	.warning {
		@apply mb-2 p-2 rounded-md border-2 shadow-lg font-bold uppercase;
		@apply border-amber-800 bg-amber-200 text-amber-800;
	}
	button.submit {
		@apply border p-2 shadow-lg rounded-xl m-2 font-semibold;
		@apply text-green-800 border-green-800 bg-green-500;
		@apply hover:text-green-500 hover:border-green-500 hover:bg-green-200;
	}
</style>
