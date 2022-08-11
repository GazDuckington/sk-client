import { c as create_ssr_component, h as createEventDispatcher, v as validate_component } from "../../_app/immutable/chunks/index-5eb23c43.js";
import "../../_app/immutable/chunks/stores-c1116e89.js";
const DefKata_svelte_svelte_type_style_lang = "";
const SkorPerKalimat_svelte_svelte_type_style_lang = "";
const TabelPred_svelte_svelte_type_style_lang = "";
const InputData_svelte_svelte_type_style_lang = "";
const css = {
  code: "textarea::-moz-placeholder{font-size:1.125rem;line-height:1.75rem;--tw-text-opacity:1;color:rgb(203 213 225 / var(--tw-text-opacity))\n}textarea::placeholder{font-size:1.125rem;line-height:1.75rem;--tw-text-opacity:1;color:rgb(203 213 225 / var(--tw-text-opacity))\n}textarea{resize:none;--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);border-radius:0.375rem;border-width:1px;padding:0.5rem;--tw-border-opacity:1;border-color:rgb(71 85 105 / var(--tw-border-opacity))\n}.dark textarea{--tw-border-opacity:1;border-color:rgb(248 250 252 / var(--tw-border-opacity))\n}textarea{--tw-bg-opacity:1;background-color:rgb(241 245 249 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(100 116 139 / var(--tw-text-opacity))\n}.dark textarea{--tw-bg-opacity:1;background-color:rgb(100 116 139 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(241 245 249 / var(--tw-text-opacity))\n}.warning{margin-bottom:0.5rem;border-radius:0.375rem;border-width:2px;padding:0.5rem;font-weight:700;text-transform:uppercase;--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);--tw-border-opacity:1;border-color:rgb(249 115 22 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(255 237 213 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(249 115 22 / var(--tw-text-opacity))\n}button.submit{margin:0.5rem;border-radius:0.75rem;border-width:1px;padding:0.5rem;font-weight:600;--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);--tw-border-opacity:1;border-color:rgb(8 145 178 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(103 232 249 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(8 145 178 / var(--tw-text-opacity))\n}button.submit:hover{--tw-border-opacity:1;border-color:rgb(6 182 212 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(165 243 252 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(6 182 212 / var(--tw-text-opacity))\n}",
  map: null
};
const InputData = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  $$result.css.add(css);
  return `<div><form method="${"post"}" class="${"flex flex-col"}">${``}

		<textarea placeholder="${"Input kalimat yang ingin dianalisis"}" rows="${"10"}">${""}</textarea>
		<div class="${"text-end"}"><button class="${"submit"}" type="${"submit"}">Submit</button></div></form>
</div>`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>home</title>`, ""}`, ""}


${`${validate_component(InputData, "InputData").$$render($$result, {}, {}, {})}`}`;
});
export {
  Routes as default
};
