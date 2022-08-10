import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true
	}),

	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: null
		}),
		prerender: {
			default: true
		},
		alias: {
			$components: 'src/components',
			$elements: 'src/elements',
			$lib: 'src/lib'
		}
	}
};

export default config;
