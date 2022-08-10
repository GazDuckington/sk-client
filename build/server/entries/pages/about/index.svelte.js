import { c as create_ssr_component, a as subscribe, d as escape } from "../../../_app/immutable/chunks/index-5eb23c43.js";
import { l as logs } from "../../../_app/immutable/chunks/stores-c1116e89.js";
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: "span.poof{border-radius:0.375rem;background-color:rgb(207 250 254 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(6 182 212 / var(--tw-text-opacity));--tw-bg-opacity:1;background-color:rgb(165 243 252 / var(--tw-bg-opacity))\n}.dark span.poof{--tw-text-opacity:1;color:rgb(8 145 178 / var(--tw-text-opacity))\n}p a:hover{--tw-text-opacity:1;color:rgb(6 182 212 / var(--tw-text-opacity))\n}.dark p a{--tw-text-opacity:1;color:rgb(34 211 238 / var(--tw-text-opacity))\n}.dark p a:hover{--tw-text-opacity:1;color:rgb(103 232 249 / var(--tw-text-opacity))\n}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $logs, $$unsubscribe_logs;
  $$unsubscribe_logs = subscribe(logs, (value) => $logs = value);
  $$result.css.add(css);
  $$unsubscribe_logs();
  return `<article class="${"prose prose-slate bacdrop-blur-2xl dark:text-gray-100 bg-opacity-0 text-left shadow-lg p-10 rounded-lg w-full"}"><h1 class="${"dark:text-gray-100"}">Cara Membaca Hasil Prediksi.</h1>
	<p class="${"lead dark:text-gray-100"}">Jika nilai Skor lebih rendah dari &#39;0&#39; maka di-labelkan sebagai kata negatif. Perlu di-ingat
		nilai prior (nilai prediksi
		<i>default</i>) adalah:
		<span class="${"poof"}">${escape($logs.logprior)}</span></p>
	<hr>
	<p>Hasil analisis kata pada kolom <strong class="${"dark:text-gray-100"}">Detail</strong> dapat di-klik,
		untuk menampilkan nilai-nilai:
	</p>
	<ul class="${"list-disc"}"><li><strong class="${"dark:text-gray-100"}">Skor</strong> adalah nilai hasil prediksi.
		</li>
		<li><strong class="${"dark:text-gray-100"}">Freq</strong> adalah jumlah kata yang dalam kalimat.
		</li>
		<li><strong class="${"dark:text-gray-100"}">Likelihood</strong> yaitu nilai sentimen setiap kata dalam model.
		</li></ul>
	<hr>
	<p><a href="${"https://github.com/GazDuckington/analisis-sentimen-naive-bayes"}">Model Analisis yang digunakan.</a></p>
	<p><a href="${"https://gzback.herokuapp.com/docs/"}">API model yang telah dibuat.</a></p>
</article>`;
});
export {
  About as default
};
