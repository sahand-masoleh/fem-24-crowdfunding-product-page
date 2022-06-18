<script>
	// @ts-nocheck
	import "./styles/App.scss";
	import Nav from "./lib/Nav.svelte";
	import Main from "./lib/Main.svelte";
	import Pledge from "./lib/Pledge.svelte";

	export let isModalOpen = false;
	export let checked;
	function openModal(event) {
		checked = event.detail?.value;
		isModalOpen = true;
		document.querySelector("body").style.overflow = "hidden";
	}
	function closeModal() {
		isModalOpen = false;
		document.querySelector("body").style.overflow = "auto";
	}
</script>

<div class="app">
	<Nav />
	<Main on:open-modal={openModal} />
	{#if isModalOpen}
		<Pledge on:close-modal={closeModal} {checked} />
	{/if}
	<footer class="footer">
		Challenge by <a
			href="https://www.frontendmentor.io"
			target="_blank"
			rel="noopener noreferrer">Frontend Mentor</a
		>. Coded by
		<a
			href="https://www.frontendmentor.io/profile/sahand-masoleh"
			target="_blank"
			rel="noopener noreferrer"
		>
			Sahand Masoleh</a
		>
	</footer>
</div>
