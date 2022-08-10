<script lang="ts">
	import Nav from '$elements/Nav.svelte';

	import ThemeSwitcher from '$elements/ThemeSwitcher.svelte';
	import Modal from './Modal.svelte';
</script>

<div class="nav flex flex-row p-3 justify-between">
	<Nav />
	<div class="items-end flex align-middle gap-1">
		<Modal />
		<ThemeSwitcher />
	</div>
</div>

<style lang="postcss" global>
	.nav {
		@apply sticky top-0 z-50;
		@apply border-b backdrop-blur-2xl;
	}
</style>
