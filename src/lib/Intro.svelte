<script>
	// @ts-nocheck
	import "../styles/Intro.scss";

	import logo from "../assets/images/logo-mastercraft.svg";
	import bookmarkIcon from "../assets/images/icon-bookmark.svg";
	import bookmarkDoneIcon from "../assets/images/icon-bookmark-done.svg";
	import Back from "./Back.svelte";

	let isBookmarked = false;
	function bookmark() {
		isBookmarked = isBookmarked ? false : true;
	}

	let isOpen = false;
	function toggleModal() {
		isOpen = isOpen ? false : true;
	}
</script>

<section class="intro card card--center">
	<img src={logo} alt="mastercraft logo" class="card__logo" />
	<h1 class="card__title">Mastercraft Bamboo Monitor Riser</h1>
	<p class="card__text">
		A beautiful & handcrafted monitor stand to reduce neck and eye strain.
	</p>
	<div class="card__container">
		<button class="intro__button button" on:click={toggleModal}
			>Back this project</button
		>
		<button class="intro__bookmark" on:click={bookmark}>
			<img src={isBookmarked ? bookmarkDoneIcon : bookmarkIcon} alt="" />
		</button>
		{#if isOpen}
			<Back on:close={toggleModal} />
		{/if}
	</div>
</section>
