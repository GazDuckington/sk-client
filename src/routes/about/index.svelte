<script lang="ts">
	import { logs } from '$lib/stores';
</script>

<article
	class="prose prose-slate bacdrop-blur-2xl
dark:text-gray-100 bg-opacity-0
text-left shadow-lg p-10 rounded-lg w-full"
>
	<h1 class="dark:text-gray-100">Cara Membaca Hasil Prediksi.</h1>
	<p class="lead dark:text-gray-100">
		Jika nilai Skor lebih rendah dari '0' maka di-labelkan sebagai kata negatif. Perlu di-ingat
		nilai prior (nilai prediksi
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
			<strong class="dark:text-gray-100">Likelihood</strong> yaitu nilai sentimen setiap kata dalam model.
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

<style lang="postcss" global>
	span.poof {
		@apply text-cyan-500 bg-cyan-100 rounded-md;
		@apply dark:text-cyan-600 bg-cyan-200;
	}
	p a {
		@apply dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300;
	}
</style>
