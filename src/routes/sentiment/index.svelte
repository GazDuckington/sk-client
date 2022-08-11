<script lang="ts">
	import { logs } from '$lib/stores';
</script>

<article
	class="prose prose-slate text-left shadow-lg p-5 rounded-lg mb-5 dark:bg-slate-700 bg-slate-300 min-w-fit"
>
	<h1 class="art1">Cara Membaca Hasil Prediksi.</h1>
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
		Hasil analisis kata pada kolom <strong class="bs">Detail</strong> dapat di-klik, untuk menampilkan
		nilai-nilai:
	</p>
	<ul class="list-disc">
		<li>
			<strong class="bs">Skor</strong> adalah nilai hasil prediksi.
		</li>
		<li>
			<strong class="bs">Freq</strong> adalah jumlah kata yang dalam kalimat.
		</li>
		<li>
			<strong class="bs">Likelihood</strong> yaitu nilai sentimen setiap kata dalam model.
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
	.art1 {
		@apply dark:text-cyan-500;
	}
	.bs {
		@apply dark:text-slate-100;
	}
	p,
	li {
		@apply dark:text-gray-100;
	}
	p a {
		@apply text-cyan-500 hover:text-cyan-400;
		@apply dark:text-slate-100 dark:hover:text-cyan-500;
	}
	span.poof {
		@apply rounded-xl px-2 bg-cyan-200 text-cyan-500;
		@apply dark:text-cyan-700 dark:bg-cyan-300;
	}
</style>
