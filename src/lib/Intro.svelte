<script>
	// @ts-nocheck
	import "../styles/Intro.scss";
	import { createEventDispatcher } from "svelte";
	import logo from "../assets/images/logo-mastercraft.svg";
	import bookmarkIcon from "../assets/images/icon-bookmark.svg";

	let isBookmarked = false;
	function bookmark() {
		isBookmarked = isBookmarked ? false : true;
	}

	const dispatch = createEventDispatcher();
	function openModal() {
		dispatch("open-modal");
	}
</script>

<section class="intro">
	<img src={logo} alt="mastercraft logo" class="intro__logo" />
	<h1 class="intro__title">Mastercraft Bamboo Monitor Riser</h1>
	<p class="intro__text">
		A beautiful & handcrafted monitor stand to reduce neck and eye strain.
	</p>
	<div class="intro__button-container">
		<button on:click={openModal} class="intro__button">Back this project</button
		>
		<button on:click={bookmark} class="intro__bookmark">
			<div
				class={`intro__bookmark-icon ${
					isBookmarked ? "intro__bookmark-icon--done" : ""
				}`}
			/>
			<p class="intro__bookmark-label">
				{isBookmarked ? "Bookmarked" : "Bookmark"}
			</p>
		</button>
	</div>
</section>
