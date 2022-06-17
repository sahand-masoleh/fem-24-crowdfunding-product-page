<script>
	import "./styles/App.scss";
	// @ts-nocheck
	import Nav from "./lib/Nav.svelte";
	import Main from "./lib/Main.svelte";
	import Pledge from "./lib/Pledge.svelte";

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

<div>
	<Nav />
	<Main on:open-modal={openModal} />
	{#if isModalOpen}
		<Pledge on:close-modal={closeModal} {checked} />
	{/if}
</div>
