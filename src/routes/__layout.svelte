<script lang="ts">
	import '../app.css';
	let theme: string = 'dark' || 'light';
	function changeTheme() {
		if (theme === 'dark') {
			theme = 'light';
		} else {
			theme = 'dark';
		}
	}
</script>

<body class={theme}>
	<button on:click|preventDefault={changeTheme}>{theme}</button>
	<slot />
</body>
