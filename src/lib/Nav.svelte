<script>
	// @ts-nocheck
	import logo from "../assets/images/logo.svg";

	export let isOpen = false;
	function toggleModal() {
		isOpen = isOpen ? false : true;
	}
</script>

<nav class="nav">
	<img src={logo} alt="crowfund logo" />
	<button on:click={toggleModal} data-open={isOpen} />
</nav>

{#if isOpen}
	<div on:click={toggleModal} />
	<div on:click={toggleModal}>
		<p>About</p>
		<hr />
		<p>Discover</p>
		<hr />
		<p>Get Started</p>
	</div>
{/if}
