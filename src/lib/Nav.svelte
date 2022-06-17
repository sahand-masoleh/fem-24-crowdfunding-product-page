<script>
	// @ts-nocheck
	import "../styles/Nav.scss";
	import logo from "../assets/images/logo.svg";
	import hamburger from "../assets/images/icon-hamburger.svg";
	import closeMenu from "../assets/images/icon-close-menu.svg";

	export let isMenuOpen = false;
	function toggleMenu() {
		isMenuOpen = isMenuOpen ? false : true;
	}
</script>

<nav class="nav">
	<img src={logo} alt="crowfund logo" class="nav__logo" />
	<button on:click={toggleMenu} class="nav__hamburger"
		><img src={isMenuOpen ? closeMenu : hamburger} alt="" /></button
	>
</nav>

{#if isMenuOpen}
	<div on:click={toggleMenu} class="nav__curtain" />
	<div on:click={toggleMenu} class="nav__menu">
		<p class="nav__item">About</p>
		<p class="nav__item">Discover</p>
		<p class="nav__item">Get Started</p>
	</div>
{/if}
