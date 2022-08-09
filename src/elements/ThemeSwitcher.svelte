<script lang="ts">
	import theme from '$lib/stores';
	import { empty } from 'svelte/internal';

	$: isDark = $theme === 'dark';

	function changeTheme() {
		isDark ? theme.set('') : theme.set('dark');
		window.document.body.classList.toggle('dark');
	}
</script>

<button on:click|preventDefault={changeTheme}>{isDark ? '🌛' : '🌞'}</button>
