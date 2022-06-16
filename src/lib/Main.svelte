<script>
	// @ts-nocheck
	import Intro from "./Intro.svelte";
	import Stats from "./Stats.svelte";
	import About from "./About.svelte";
	import Pledge from "./Pledge.svelte";

	export let isModalOpen = false;
	export let checked;
	function openModal(event) {
		checked = event.detail?.value;
		isModalOpen = true;
		// document.querySelector("body").style.overflow = "hidden";
	}
	function closeModal() {
		isModalOpen = false;
		// document.querySelector("body").style.overflow = "auto";
	}
</script>

<main class="main">
	<Intro on:open-modal={openModal} />
	<Stats />
	<About on:open-modal={openModal} />
	{#if isModalOpen}
		<Pledge on:close-modal={closeModal} {checked} />
	{/if}
</main>
