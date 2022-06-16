<script>
	// @ts-nocheck
	import "../styles/Main.scss";

	import Intro from "./Intro.svelte";
	import Stats from "./Stats.svelte";
	import About from "./About.svelte";
	import Back from "./Back.svelte";

	export let isModalOpen = false;
	export let checked;
	function openModal(event) {
		checked = event.detail?.value;
		console.log(checked);
		isModalOpen = true;
		document.querySelector("body").style.overflow = "hidden";
	}
	function closeModal() {
		isModalOpen = false;
		document.querySelector("body").style.overflow = "auto";
	}
</script>

<main class="main">
	<Intro on:open-modal={openModal} />
	<Stats />
	<About on:open-modal={openModal} />
	{#if isModalOpen}
		<Back on:close-modal={closeModal} {checked} />
	{/if}
</main>
