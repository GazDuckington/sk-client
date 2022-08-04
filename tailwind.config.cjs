/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'dark-bg': '#1e1e2e',
				'dark-bg-sec': '#181825',
				'dark-fg': '#cdd6f4',
				'dark-fg-sec': '#bac2de',
				'dark-blue': '#89b4fa',
				'dark-sapphire': '#74c7ec',
				'dark-green': '#a6e3a1',
				'dark-red': '#f38ba8',
				'dark-yellow': '#f9e2af',
				'light-bg': '#eff1f5',
				'light-bg-sec': '#e6e9ef',
				'light-fg': '#4c4f69',
				'light-fg-sec': '#5c5f77',
				'light-blue': '#1e66f5',
				'light-sapphire': '#209fb5',
				'light-green': '#40a02b',
				'light-yellow': '#df8e1d',
				'light-red': '#d20f39'
			}
		}
	},
	plugins: [],
	darkMode: 'class'
};
