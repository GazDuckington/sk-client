/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				gray: {
					50: '#f0f6fc',
					100: '#c9d1d9',
					200: '#b1bac4',
					300: '#8b949e',
					400: '#6e7681',
					500: '#484f58',
					600: '#30363d',
					700: '#21262d',
					800: '#161b22',
					900: '#0d1117'
				}
			}
		}
	},
	plugins: [],
	darkMode: 'class'
};
