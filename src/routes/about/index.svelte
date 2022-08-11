<svelte:head>
	<title>About developer</title>
</svelte:head>
<div class="grid lg:grid-cols-5 mb-10 mx-10 grid-cols-1 border border-gray-500 p-2 gap-2">
	<div class="item bg-yellow-200 flex text-center gap-2">
		<img class="photo" src="/ducky.png" alt="hello" />
		<a href="mailto:dianghazy@protonmail.com">
			<h3>Ghazy</h3>
		</a>
	</div>
	<div class="item lg:col-span-4 bg-emerald-300">2</div>
</div>

<style lang="postcss">
	div.item {
		@apply rounded-lg shadow-2xl p-5 flex-col overflow-scroll lg:h-fit;
	}
	img.photo {
		@apply rounded-full shadow-sm bg-white border-yellow-200;
		@apply contrast-100 saturate-150;
	}
	a h3 {
		@apply underline decoration-2 underline-offset-2 font-semibold;
		@apply decoration-cyan-500 text-cyan-500;
		@apply hover:decoration-sky-400 hover:text-sky-400;
	}
</style>
