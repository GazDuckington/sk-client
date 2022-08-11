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

<div>
	<form on:submit|preventDefault={handleSubmit} method="post" class="flex flex-col">
		{#if wrg}
			<div class="warning">{wrg}</div>
		{/if}

		<textarea placeholder="Input kalimat yang ingin dianalisis" rows="10" bind:value={artikel} />
		<div class="text-end">
			<button class="submit" type="submit">Submit</button>
		</div>
	</form>
</div>

<style lang="postcss" global>
	textarea {
		@apply placeholder:text-lg placeholder:text-slate-300;
		@apply resize-none shadow-lg;
		@apply border rounded-md p-2;
		@apply border-slate-600 dark:border-slate-50;
		@apply bg-slate-50 text-slate-500;
		@apply dark:bg-slate-500 dark:text-slate-100;
	}
	.warning {
		@apply mb-2 p-2 rounded-md border-2 shadow-lg font-bold uppercase;
		@apply border-orange-500 bg-orange-100 text-orange-500;
	}
	button.submit {
		@apply border p-2 shadow-lg rounded-xl m-2 font-semibold;
		@apply text-cyan-600 border-cyan-600 bg-cyan-300;
		@apply hover:text-cyan-500 hover:border-cyan-500 hover:bg-cyan-200;
	}
</style>
