<script lang="ts">
	import theme from '$lib/stores';

	$: isDark = $theme === 'dark';

	function changeTheme() {
		isDark ? theme.set('light') : theme.set('dark');
	}
</script>

<button on:click|preventDefault={changeTheme}>{isDark ? '🌛' : '🌞'}</button>
