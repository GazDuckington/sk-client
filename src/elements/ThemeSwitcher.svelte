<script lang="ts">
	import IconTheme from '$elements/IconTheme.svelte';
	import theme from '$lib/stores';

	$: isDark = $theme === 'dark';

	function changeTheme() {
		isDark ? theme.set('light') : theme.set('dark');
		window.document.body.classList.toggle('dark');
	}
</script>

<button on:click|preventDefault={changeTheme}>
	<IconTheme />
</button>
