<script lang="ts">
	import { logs, theme } from '$lib/stores';
	$: dark = $theme === 'dark';
</script>

<div class:dark>
	<article>
		<h1>Cara Membaca Hasil Prediksi.</h1>
		<p class="lead">
			Jika nilai Skor lebih rendah dari '0' maka di-labelkan sebagai kata negatif. Perlu di-ingat
			nilai prior (nilai prediksi
			<i>default</i>) adalah:
			<span class="poof">
				{$logs.logprior}
			</span>
		</p>
		<hr />
		<p>
			Hasil analisis kata pada kolom <strong>Detail</strong> dapat di-klik, untuk menampilkan nilai-nilai:
		</p>
		<ul class="list-disc">
			<li>
				<strong>Skor</strong> adalah nilai hasil prediksi.
			</li>
			<li>
				<strong>Freq</strong> adalah jumlah kata yang dalam kalimat.
			</li>
			<li>
				<strong>Likelihood</strong> yaitu nilai sentimen setiap kata dalam model.
			</li>
		</ul>
		<hr />
		<li>
			<a href="https://github.com/GazDuckington/analisis-sentimen-naive-bayes"
				>Model Analisis yang digunakan.</a
			>
		</li>
		<li>
			<a href="https://gzback.herokuapp.com/docs/">API model yang telah dibuat.</a>
		</li>
	</article>
</div>

<style lang="postcss">
	* {
		@apply dark:bg-slate-800 dark:text-slate-100;
		transition: color 0.5s;
		transition: background-color 0.5s;
	}
	h1 {
		@apply dark:text-cyan-500 !important;
	}
	li {
		@apply list-none;
	}
	article {
		@apply prose prose-slate bg-opacity-0 text-left shadow-lg p-10 rounded-lg w-full;
	}
	span.poof {
		@apply px-2 font-semibold;
		@apply text-cyan-500 bg-cyan-100 rounded-md;
		@apply dark:text-cyan-600 bg-cyan-200;
	}
	li a {
		@apply dark:text-cyan-500 dark:hover:text-cyan-300;
		@apply text-cyan-600 hover:text-cyan-500;
	}
</style>
