import { c as create_ssr_component, a as subscribe, d as escape } from "../../../_app/immutable/chunks/index-5eb23c43.js";
import { t as theme, l as logs } from "../../../_app/immutable/chunks/stores-c1116e89.js";
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: '.dark.svelte-195kryn .svelte-195kryn{--tw-bg-opacity:1;background-color:rgb(30 41 59 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(241 245 249 / var(--tw-text-opacity))}.svelte-195kryn.svelte-195kryn{transition:color 0.5s;transition:background-color 0.5s}.dark.svelte-195kryn h1.svelte-195kryn{--tw-text-opacity:1 !important;color:rgb(6 182 212 / var(--tw-text-opacity)) !important}li.svelte-195kryn.svelte-195kryn{list-style-type:none}article.svelte-195kryn.svelte-195kryn{color:var(--tw-prose-body);max-width:65ch}article.svelte-195kryn .svelte-195kryn:where([class~="lead"]):not(:where([class~="not-prose"] *)){color:var(--tw-prose-lead);font-size:1.25em;line-height:1.6;margin-top:1.2em;margin-bottom:1.2em}article.svelte-195kryn .svelte-195kryn:where(a):not(:where([class~="not-prose"] *)){color:var(--tw-prose-links);text-decoration:underline;font-weight:500}article.svelte-195kryn .svelte-195kryn:where(strong):not(:where([class~="not-prose"] *)){color:var(--tw-prose-bold);font-weight:600}article.svelte-195kryn .svelte-195kryn:where(a strong):not(:where([class~="not-prose"] *)){color:inherit}article.svelte-195kryn .svelte-195kryn:where(blockquote strong):not(:where([class~="not-prose"] *)){color:inherit}article.svelte-195kryn .svelte-195kryn:where(thead th strong):not(:where([class~="not-prose"] *)){color:inherit}article.svelte-195kryn .svelte-195kryn:where(ol):not(:where([class~="not-prose"] *)){list-style-type:decimal;margin-top:1.25em;margin-bottom:1.25em;padding-left:1.625em}article.svelte-195kryn .svelte-195kryn:where(ol[type="A"]):not(:where([class~="not-prose"] *)){list-style-type:upper-alpha}article.svelte-195kryn .svelte-195kryn:where(ol[type="a"]):not(:where([class~="not-prose"] *)){list-style-type:lower-alpha}article.svelte-195kryn .svelte-195kryn:where(ol[type="A" s]):not(:where([class~="not-prose"] *)){list-style-type:upper-alpha}article.svelte-195kryn .svelte-195kryn:where(ol[type="a" s]):not(:where([class~="not-prose"] *)){list-style-type:lower-alpha}article.svelte-195kryn .svelte-195kryn:where(ol[type="I"]):not(:where([class~="not-prose"] *)){list-style-type:upper-roman}article.svelte-195kryn .svelte-195kryn:where(ol[type="i"]):not(:where([class~="not-prose"] *)){list-style-type:lower-roman}article.svelte-195kryn .svelte-195kryn:where(ol[type="I" s]):not(:where([class~="not-prose"] *)){list-style-type:upper-roman}article.svelte-195kryn .svelte-195kryn:where(ol[type="i" s]):not(:where([class~="not-prose"] *)){list-style-type:lower-roman}article.svelte-195kryn .svelte-195kryn:where(ol[type="1"]):not(:where([class~="not-prose"] *)){list-style-type:decimal}article.svelte-195kryn .svelte-195kryn:where(ul):not(:where([class~="not-prose"] *)){list-style-type:disc;margin-top:1.25em;margin-bottom:1.25em;padding-left:1.625em}article.svelte-195kryn .svelte-195kryn:where(ol > li):not(:where([class~="not-prose"] *))::marker{font-weight:400;color:var(--tw-prose-counters)}article.svelte-195kryn .svelte-195kryn:where(ul > li):not(:where([class~="not-prose"] *))::marker{color:var(--tw-prose-bullets)}article.svelte-195kryn .svelte-195kryn:where(hr):not(:where([class~="not-prose"] *)){border-color:var(--tw-prose-hr);border-top-width:1px;margin-top:3em;margin-bottom:3em}article.svelte-195kryn .svelte-195kryn:where(blockquote):not(:where([class~="not-prose"] *)){font-weight:500;font-style:italic;color:var(--tw-prose-quotes);border-left-width:0.25rem;border-left-color:var(--tw-prose-quote-borders);quotes:"\\201C""\\201D""\\2018""\\2019";margin-top:1.6em;margin-bottom:1.6em;padding-left:1em}article.svelte-195kryn .svelte-195kryn:where(blockquote p:first-of-type):not(:where([class~="not-prose"] *))::before{content:open-quote}article.svelte-195kryn .svelte-195kryn:where(blockquote p:last-of-type):not(:where([class~="not-prose"] *))::after{content:close-quote}article.svelte-195kryn .svelte-195kryn:where(h1):not(:where([class~="not-prose"] *)){color:var(--tw-prose-headings);font-weight:800;font-size:2.25em;margin-top:0;margin-bottom:0.8888889em;line-height:1.1111111}article.svelte-195kryn .svelte-195kryn:where(h1 strong):not(:where([class~="not-prose"] *)){font-weight:900;color:inherit}article.svelte-195kryn .svelte-195kryn:where(h2):not(:where([class~="not-prose"] *)){color:var(--tw-prose-headings);font-weight:700;font-size:1.5em;margin-top:2em;margin-bottom:1em;line-height:1.3333333}article.svelte-195kryn .svelte-195kryn:where(h2 strong):not(:where([class~="not-prose"] *)){font-weight:800;color:inherit}article.svelte-195kryn .svelte-195kryn:where(h3):not(:where([class~="not-prose"] *)){color:var(--tw-prose-headings);font-weight:600;font-size:1.25em;margin-top:1.6em;margin-bottom:0.6em;line-height:1.6}article.svelte-195kryn .svelte-195kryn:where(h3 strong):not(:where([class~="not-prose"] *)){font-weight:700;color:inherit}article.svelte-195kryn .svelte-195kryn:where(h4):not(:where([class~="not-prose"] *)){color:var(--tw-prose-headings);font-weight:600;margin-top:1.5em;margin-bottom:0.5em;line-height:1.5}article.svelte-195kryn .svelte-195kryn:where(h4 strong):not(:where([class~="not-prose"] *)){font-weight:700;color:inherit}article.svelte-195kryn .svelte-195kryn:where(img):not(:where([class~="not-prose"] *)){margin-top:2em;margin-bottom:2em}article.svelte-195kryn .svelte-195kryn:where(figure > *):not(:where([class~="not-prose"] *)){margin-top:0;margin-bottom:0}article.svelte-195kryn .svelte-195kryn:where(figcaption):not(:where([class~="not-prose"] *)){color:var(--tw-prose-captions);font-size:0.875em;line-height:1.4285714;margin-top:0.8571429em}article.svelte-195kryn .svelte-195kryn:where(code):not(:where([class~="not-prose"] *)){color:var(--tw-prose-code);font-weight:600;font-size:0.875em}article.svelte-195kryn .svelte-195kryn:where(code):not(:where([class~="not-prose"] *))::before{content:"`"}article.svelte-195kryn .svelte-195kryn:where(code):not(:where([class~="not-prose"] *))::after{content:"`"}article.svelte-195kryn .svelte-195kryn:where(a code):not(:where([class~="not-prose"] *)){color:inherit}article.svelte-195kryn .svelte-195kryn:where(h1 code):not(:where([class~="not-prose"] *)){color:inherit}article.svelte-195kryn .svelte-195kryn:where(h2 code):not(:where([class~="not-prose"] *)){color:inherit;font-size:0.875em}article.svelte-195kryn .svelte-195kryn:where(h3 code):not(:where([class~="not-prose"] *)){color:inherit;font-size:0.9em}article.svelte-195kryn .svelte-195kryn:where(h4 code):not(:where([class~="not-prose"] *)){color:inherit}article.svelte-195kryn .svelte-195kryn:where(blockquote code):not(:where([class~="not-prose"] *)){color:inherit}article.svelte-195kryn .svelte-195kryn:where(thead th code):not(:where([class~="not-prose"] *)){color:inherit}article.svelte-195kryn .svelte-195kryn:where(pre):not(:where([class~="not-prose"] *)){color:var(--tw-prose-pre-code);background-color:var(--tw-prose-pre-bg);overflow-x:auto;font-weight:400;font-size:0.875em;line-height:1.7142857;margin-top:1.7142857em;margin-bottom:1.7142857em;border-radius:0.375rem;padding-top:0.8571429em;padding-right:1.1428571em;padding-bottom:0.8571429em;padding-left:1.1428571em}article.svelte-195kryn .svelte-195kryn:where(pre code):not(:where([class~="not-prose"] *)){background-color:transparent;border-width:0;border-radius:0;padding:0;font-weight:inherit;color:inherit;font-size:inherit;font-family:inherit;line-height:inherit}article.svelte-195kryn .svelte-195kryn:where(pre code):not(:where([class~="not-prose"] *))::before{content:none}article.svelte-195kryn .svelte-195kryn:where(pre code):not(:where([class~="not-prose"] *))::after{content:none}article.svelte-195kryn .svelte-195kryn:where(table):not(:where([class~="not-prose"] *)){width:100%;table-layout:auto;text-align:left;margin-top:2em;margin-bottom:2em;font-size:0.875em;line-height:1.7142857}article.svelte-195kryn .svelte-195kryn:where(thead):not(:where([class~="not-prose"] *)){border-bottom-width:1px;border-bottom-color:var(--tw-prose-th-borders)}article.svelte-195kryn .svelte-195kryn:where(thead th):not(:where([class~="not-prose"] *)){color:var(--tw-prose-headings);font-weight:600;vertical-align:bottom;padding-right:0.5714286em;padding-bottom:0.5714286em;padding-left:0.5714286em}article.svelte-195kryn .svelte-195kryn:where(tbody tr):not(:where([class~="not-prose"] *)){border-bottom-width:1px;border-bottom-color:var(--tw-prose-td-borders)}article.svelte-195kryn .svelte-195kryn:where(tbody tr:last-child):not(:where([class~="not-prose"] *)){border-bottom-width:0}article.svelte-195kryn .svelte-195kryn:where(tbody td):not(:where([class~="not-prose"] *)){vertical-align:baseline}article.svelte-195kryn .svelte-195kryn:where(tfoot):not(:where([class~="not-prose"] *)){border-top-width:1px;border-top-color:var(--tw-prose-th-borders)}article.svelte-195kryn .svelte-195kryn:where(tfoot td):not(:where([class~="not-prose"] *)){vertical-align:top}article.svelte-195kryn.svelte-195kryn{--tw-prose-body:#374151;--tw-prose-headings:#111827;--tw-prose-lead:#4b5563;--tw-prose-links:#111827;--tw-prose-bold:#111827;--tw-prose-counters:#6b7280;--tw-prose-bullets:#d1d5db;--tw-prose-hr:#e5e7eb;--tw-prose-quotes:#111827;--tw-prose-quote-borders:#e5e7eb;--tw-prose-captions:#6b7280;--tw-prose-code:#111827;--tw-prose-pre-code:#e5e7eb;--tw-prose-pre-bg:#1f2937;--tw-prose-th-borders:#d1d5db;--tw-prose-td-borders:#e5e7eb;--tw-prose-invert-body:#d1d5db;--tw-prose-invert-headings:#fff;--tw-prose-invert-lead:#9ca3af;--tw-prose-invert-links:#fff;--tw-prose-invert-bold:#fff;--tw-prose-invert-counters:#9ca3af;--tw-prose-invert-bullets:#4b5563;--tw-prose-invert-hr:#374151;--tw-prose-invert-quotes:#f3f4f6;--tw-prose-invert-quote-borders:#374151;--tw-prose-invert-captions:#9ca3af;--tw-prose-invert-code:#fff;--tw-prose-invert-pre-code:#d1d5db;--tw-prose-invert-pre-bg:rgb(0 0 0 / 50%);--tw-prose-invert-th-borders:#4b5563;--tw-prose-invert-td-borders:#374151;font-size:1rem;line-height:1.75}article.svelte-195kryn .svelte-195kryn:where(p):not(:where([class~="not-prose"] *)){margin-top:1.25em;margin-bottom:1.25em}article.svelte-195kryn .svelte-195kryn:where(video):not(:where([class~="not-prose"] *)){margin-top:2em;margin-bottom:2em}article.svelte-195kryn .svelte-195kryn:where(figure):not(:where([class~="not-prose"] *)){margin-top:2em;margin-bottom:2em}article.svelte-195kryn .svelte-195kryn:where(li):not(:where([class~="not-prose"] *)){margin-top:0.5em;margin-bottom:0.5em}article.svelte-195kryn .svelte-195kryn:where(ol > li):not(:where([class~="not-prose"] *)){padding-left:0.375em}article.svelte-195kryn .svelte-195kryn:where(ul > li):not(:where([class~="not-prose"] *)){padding-left:0.375em}article.svelte-195kryn .svelte-195kryn:where(.prose > ul > li p):not(:where([class~="not-prose"] *)){margin-top:0.75em;margin-bottom:0.75em}article.svelte-195kryn .svelte-195kryn:where(.prose > ul > li > *:first-child):not(:where([class~="not-prose"] *)){margin-top:1.25em}article.svelte-195kryn .svelte-195kryn:where(.prose > ul > li > *:last-child):not(:where([class~="not-prose"] *)){margin-bottom:1.25em}article.svelte-195kryn .svelte-195kryn:where(.prose > ol > li > *:first-child):not(:where([class~="not-prose"] *)){margin-top:1.25em}article.svelte-195kryn .svelte-195kryn:where(.prose > ol > li > *:last-child):not(:where([class~="not-prose"] *)){margin-bottom:1.25em}article.svelte-195kryn .svelte-195kryn:where(ul ul, ul ol, ol ul, ol ol):not(:where([class~="not-prose"] *)){margin-top:0.75em;margin-bottom:0.75em}article.svelte-195kryn .svelte-195kryn:where(hr + *):not(:where([class~="not-prose"] *)){margin-top:0}article.svelte-195kryn .svelte-195kryn:where(h2 + *):not(:where([class~="not-prose"] *)){margin-top:0}article.svelte-195kryn .svelte-195kryn:where(h3 + *):not(:where([class~="not-prose"] *)){margin-top:0}article.svelte-195kryn .svelte-195kryn:where(h4 + *):not(:where([class~="not-prose"] *)){margin-top:0}article.svelte-195kryn .svelte-195kryn:where(thead th:first-child):not(:where([class~="not-prose"] *)){padding-left:0}article.svelte-195kryn .svelte-195kryn:where(thead th:last-child):not(:where([class~="not-prose"] *)){padding-right:0}article.svelte-195kryn .svelte-195kryn:where(tbody td, tfoot td):not(:where([class~="not-prose"] *)){padding-top:0.5714286em;padding-right:0.5714286em;padding-bottom:0.5714286em;padding-left:0.5714286em}article.svelte-195kryn .svelte-195kryn:where(tbody td:first-child, tfoot td:first-child):not(:where([class~="not-prose"] *)){padding-left:0}article.svelte-195kryn .svelte-195kryn:where(tbody td:last-child, tfoot td:last-child):not(:where([class~="not-prose"] *)){padding-right:0}article.svelte-195kryn .svelte-195kryn:where(.prose > :first-child):not(:where([class~="not-prose"] *)){margin-top:0}article.svelte-195kryn .svelte-195kryn:where(.prose > :last-child):not(:where([class~="not-prose"] *)){margin-bottom:0}article.svelte-195kryn.svelte-195kryn{--tw-prose-body:#334155;--tw-prose-headings:#0f172a;--tw-prose-lead:#475569;--tw-prose-links:#0f172a;--tw-prose-bold:#0f172a;--tw-prose-counters:#64748b;--tw-prose-bullets:#cbd5e1;--tw-prose-hr:#e2e8f0;--tw-prose-quotes:#0f172a;--tw-prose-quote-borders:#e2e8f0;--tw-prose-captions:#64748b;--tw-prose-code:#0f172a;--tw-prose-pre-code:#e2e8f0;--tw-prose-pre-bg:#1e293b;--tw-prose-th-borders:#cbd5e1;--tw-prose-td-borders:#e2e8f0;--tw-prose-invert-body:#cbd5e1;--tw-prose-invert-headings:#fff;--tw-prose-invert-lead:#94a3b8;--tw-prose-invert-links:#fff;--tw-prose-invert-bold:#fff;--tw-prose-invert-counters:#94a3b8;--tw-prose-invert-bullets:#475569;--tw-prose-invert-hr:#334155;--tw-prose-invert-quotes:#f1f5f9;--tw-prose-invert-quote-borders:#334155;--tw-prose-invert-captions:#94a3b8;--tw-prose-invert-code:#fff;--tw-prose-invert-pre-code:#cbd5e1;--tw-prose-invert-pre-bg:rgb(0 0 0 / 50%);--tw-prose-invert-th-borders:#475569;--tw-prose-invert-td-borders:#334155;width:100%;border-radius:0.5rem;--tw-bg-opacity:0;padding:2.5rem;text-align:left;--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}span.poof.svelte-195kryn.svelte-195kryn{padding-left:0.5rem;padding-right:0.5rem;font-weight:600;border-radius:0.375rem;background-color:rgb(207 250 254 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(6 182 212 / var(--tw-text-opacity));--tw-bg-opacity:1;background-color:rgb(165 243 252 / var(--tw-bg-opacity))}.dark.svelte-195kryn span.poof.svelte-195kryn{--tw-text-opacity:1;color:rgb(8 145 178 / var(--tw-text-opacity))}.dark.svelte-195kryn li a.svelte-195kryn{--tw-text-opacity:1;color:rgb(6 182 212 / var(--tw-text-opacity))}.dark.svelte-195kryn li a.svelte-195kryn:hover{--tw-text-opacity:1;color:rgb(103 232 249 / var(--tw-text-opacity))}li.svelte-195kryn a.svelte-195kryn{--tw-text-opacity:1;color:rgb(8 145 178 / var(--tw-text-opacity))}li.svelte-195kryn a.svelte-195kryn:hover{--tw-text-opacity:1;color:rgb(6 182 212 / var(--tw-text-opacity))}',
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let dark;
  let $theme, $$unsubscribe_theme;
  let $logs, $$unsubscribe_logs;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$unsubscribe_logs = subscribe(logs, (value) => $logs = value);
  $$result.css.add(css);
  dark = $theme === "dark";
  $$unsubscribe_theme();
  $$unsubscribe_logs();
  return `<div class="${["svelte-195kryn", dark ? "dark" : ""].join(" ").trim()}"><article class="${"svelte-195kryn"}"><h1 class="${"svelte-195kryn"}">Cara Membaca Hasil Prediksi.</h1>
		<p class="${"lead svelte-195kryn"}">Jika nilai Skor lebih rendah dari &#39;0&#39; maka di-labelkan sebagai kata negatif. Perlu di-ingat
			nilai prior (nilai prediksi
			<i class="${"svelte-195kryn"}">default</i>) adalah:
			<span class="${"poof svelte-195kryn"}">${escape($logs.logprior)}</span></p>
		<hr class="${"svelte-195kryn"}">
		<p class="${"svelte-195kryn"}">Hasil analisis kata pada kolom <strong class="${"svelte-195kryn"}">Detail</strong> dapat di-klik, untuk menampilkan nilai-nilai:
		</p>
		<ul class="${"list-disc svelte-195kryn"}"><li class="${"svelte-195kryn"}"><strong class="${"svelte-195kryn"}">Skor</strong> adalah nilai hasil prediksi.
			</li>
			<li class="${"svelte-195kryn"}"><strong class="${"svelte-195kryn"}">Freq</strong> adalah jumlah kata yang dalam kalimat.
			</li>
			<li class="${"svelte-195kryn"}"><strong class="${"svelte-195kryn"}">Likelihood</strong> yaitu nilai sentimen setiap kata dalam model.
			</li></ul>
		<hr class="${"svelte-195kryn"}">
		<li class="${"svelte-195kryn"}"><a href="${"https://github.com/GazDuckington/analisis-sentimen-naive-bayes"}" class="${"svelte-195kryn"}">Model Analisis yang digunakan.</a></li>
		<li class="${"svelte-195kryn"}"><a href="${"https://gzback.herokuapp.com/docs/"}" class="${"svelte-195kryn"}">API model yang telah dibuat.</a></li></article>
</div>`;
});
export {
  About as default
};
