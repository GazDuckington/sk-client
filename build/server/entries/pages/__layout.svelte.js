import { g as getContext, c as create_ssr_component, a as subscribe, e as each, b as add_attribute, d as escape, v as validate_component } from "../../_app/immutable/chunks/index-5eb23c43.js";
/* empty css                                        */import { t as theme, l as logs } from "../../_app/immutable/chunks/stores-c1116e89.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const Nav_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "a.navi{display:flex;flex-direction:column;font-weight:600\n}a.navi:hover{--tw-text-opacity:1;color:rgb(6 182 212 / var(--tw-text-opacity))\n}.dark a.navi:hover{--tw-text-opacity:1;color:rgb(8 145 178 / var(--tw-text-opacity))\n}a.active{border-bottom-width:2px;--tw-border-opacity:1;border-color:rgb(6 182 212 / var(--tw-border-opacity));--tw-text-opacity:1;color:rgb(6 182 212 / var(--tw-text-opacity))\n}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const nav = [{ title: "Home", path: "/" }, { title: "About", path: "/about" }];
  $$result.css.add(css$3);
  $$unsubscribe_page();
  return `<nav class="${"flex flex-row gap-2"}">${each(nav, (item) => {
    return `<a${add_attribute("href", item.path, 0)} class="${["navi", $page.url.pathname === item.path ? "active" : ""].join(" ").trim()}">${escape(item.title)}
		</a>`;
  })}
</nav>`;
});
const IconTheme_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "svg{height:1.75rem;width:1.75rem;border-radius:0.375rem;padding:0.25rem\n}svg:hover{--tw-text-opacity:1;color:rgb(6 182 212 / var(--tw-text-opacity))\n}.dark svg:hover{--tw-text-opacity:1;color:rgb(8 145 178 / var(--tw-text-opacity))\n}",
  map: null
};
const IconTheme = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isDark;
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$result.css.add(css$2);
  isDark = $theme === "dark";
  $$unsubscribe_theme();
  return `${isDark ? `<svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path d="${"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"}"></path></svg>` : `<svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fill-rule="${"evenodd"}" d="${"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"}" clip-rule="${"evenodd"}"></path></svg>`}`;
});
const ThemeSwitcher = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => value);
  $$unsubscribe_theme();
  return `<button>${validate_component(IconTheme, "IconTheme").$$render($$result, {}, {}, {})}</button>`;
});
const Navbar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".nav{position:-webkit-sticky;position:sticky;top:0px;z-index:50;border-bottom-width:1px;--tw-backdrop-blur:blur(40px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)\n}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"nav flex flex-row p-3 justify-between"}">${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
	<div class="${"items-end flex align-middle gap-1"}">${validate_component(ThemeSwitcher, "ThemeSwitcher").$$render($$result, {}, {}, {})}</div>
</div>`;
});
const __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".footer{border-top-width:1px;--tw-bg-opacity:0.05;--tw-backdrop-blur:blur(40px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}*{transition:background-color 0.3s;transition:color 0.3s}body{background-image:linear-gradient(to top right, var(--tw-gradient-stops));--tw-gradient-from:#d8dee9;--tw-gradient-to:rgb(216 222 233 / 0);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to);--tw-gradient-to:rgb(229 233 240 / 0);--tw-gradient-stops:var(--tw-gradient-from), #e5e9f0, var(--tw-gradient-to);--tw-gradient-to:#eceff4;--tw-text-opacity:1;color:rgb(13 17 23 / var(--tw-text-opacity))}body.dark{background-image:linear-gradient(to top right, var(--tw-gradient-stops));--tw-gradient-from:#2e3440;--tw-gradient-to:rgb(46 52 64 / 0);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to);--tw-gradient-to:rgb(67 76 94 / 0);--tw-gradient-stops:var(--tw-gradient-from), #434c5e, var(--tw-gradient-to);--tw-gradient-to:#4c566a;--tw-text-opacity:1;color:rgb(201 209 217 / var(--tw-text-opacity))}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_logs;
  $$unsubscribe_logs = subscribe(logs, (value) => value);
  $$result.css.add(css);
  $$unsubscribe_logs();
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}

<div class="${"relative flex h-screen w-screen flex-col items-center overflow-scroll py-5"}"><div class="${"text-center"}">${slots.default ? slots.default({}) : ``}</div></div>

<div class="${"footer text-center pb-5 shadow-lg"}"><p>\xA92022 by dianghazy@gmail.com</p>
</div>`;
});
export {
  _layout as default
};
