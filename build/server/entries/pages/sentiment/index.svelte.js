import { c as create_ssr_component, v as validate_component } from "../../../_app/immutable/chunks/index-5eb23c43.js";
import "../../../_app/immutable/chunks/stores-c1116e89.js";
import { I as InputData } from "../../../_app/immutable/chunks/InputData-75f6c7e1.js";
/* empty css                                           */const index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".dark p{--tw-text-opacity:1;color:rgb(241 245 249 / var(--tw-text-opacity))\n}",
  map: null
};
const Sentiment = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Sentiment</title>`, ""}`, ""}
<p class="${"lead prose text-left"}">Input kalimat:</p>
${validate_component(InputData, "InputData").$$render($$result, {}, {}, {})}
${`<div></div>`}`;
});
export {
  Sentiment as default
};
