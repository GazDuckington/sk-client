<script lang="ts">
	import IconQuestion from '$elements/IconQuestion.svelte';
	import { logs } from '$lib/stores';
	var overlay = false;
</script>

{#if overlay}
	<div class="absolute" on:click|preventDefault={() => (overlay = !overlay)}>
		<div
			class="inside 
            overflow-scroll rounded-lg shadow-lg 
            p-10 w-[40em] h-[31em] gap-2 
            bg-gray-50 dark:bg-gray-600"
		>
			<article class="prose prose-slate dark:text-gray-100">
				<h1 class="dark:text-gray-100">Cara Membaca Hasil Prediksi.</h1>
				<p class="lead dark:text-gray-100">
					Jika nilai Skor lebih rendah dari '0' maka di-labelkan sebagai kata negatif. Perlu
					di-ingat nilai prior (nilai prediksi
					<i>default</i>) adalah:
					<span class="poof">
						{$logs.logprior}
					</span>
				</p>
				<hr />
				<p>
					Hasil analisis kata pada kolom <strong class="dark:text-gray-100">Detail</strong> dapat di-klik,
					untuk menampilkan nilai-nilai:
				</p>
				<ul class="list-disc">
					<li>
						<strong class="dark:text-gray-100">Skor</strong> adalah nilai hasil prediksi.
					</li>
					<li>
						<strong class="dark:text-gray-100">Freq</strong> adalah jumlah kata yang dalam kalimat.
					</li>
					<li>
						<strong class="dark:text-gray-100">Likelihood</strong> yaitu nilai sentimen setiap kata dalam
						model.
					</li>
				</ul>
				<hr />
				<p>
					<a href="https://github.com/GazDuckington/analisis-sentimen-naive-bayes"
						>Model Analisis yang digunakan.</a
					>
				</p>
				<p>
					<a href="https://gzback.herokuapp.com/docs/">API model yang telah dibuat.</a>
				</p>
			</article>
		</div>
	</div>
{/if}

<button class="btn" class:overlay on:click|preventDefault={() => (overlay = !overlay)}>
	<IconQuestion />
</button>

<style lang="postcss" global>
	div.absolute {
		@apply top-0 left-0 flex justify-center items-center;
		@apply w-screen h-screen;
		@apply bg-white bg-opacity-5 backdrop-blur-xl;
	}
	span.poof {
		@apply text-cyan-500 bg-cyan-100 rounded-md;
		@apply dark:text-cyan-600 bg-cyan-200;
	}
	th {
		@apply text-gray-100;
	}
	p a {
		@apply dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300;
	}
</style>
