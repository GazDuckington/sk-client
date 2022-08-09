<script lang="ts">
	import theme from '$lib/stores';
	import IconMoon from '$elements/IconMoon.svelte';

	$: isDark = $theme === 'dark';

	function changeTheme() {
		isDark ? theme.set('light') : theme.set('dark');
		window.document.body.classList.toggle('dark');
	}
</script>

<button on:click|preventDefault={changeTheme}>
	<IconMoon />
</button>
