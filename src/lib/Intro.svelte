<script>
	// @ts-nocheck
	import "../styles/Intro.scss";

	import { createEventDispatcher } from "svelte";
	import logo from "../assets/images/logo-mastercraft.svg";
	import bookmarkIcon from "../assets/images/icon-bookmark.svg";
	import bookmarkDoneIcon from "../assets/images/icon-bookmark-done.svg";

	let isBookmarked = false;
	function bookmark() {
		isBookmarked = isBookmarked ? false : true;
	}

	const dispatch = createEventDispatcher();
	function openModal() {
		dispatch("open-modal");
	}
</script>

<section class="intro card card--center">
	<img src={logo} alt="mastercraft logo" class="card__logo" />
	<h1 class="card__title">Mastercraft Bamboo Monitor Riser</h1>
	<p class="card__text">
		A beautiful & handcrafted monitor stand to reduce neck and eye strain.
	</p>
	<div class="card__container">
		<button class="intro__button button" on:click={openModal}
			>Back this project</button
		>
		<button
			class={`intro__bookmark ${isBookmarked ? "intro__bookmark--active" : ""}`}
			on:click={bookmark}
		>
			<img
				class="intro__icon"
				src={isBookmarked ? bookmarkDoneIcon : bookmarkIcon}
				alt=""
			/>
			<p class="intro__label">{isBookmarked ? "Bookmarked" : "Bookmark"}</p>
		</button>
	</div>
</section>
