<script>
	// @ts-nocheck
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
	<img src={logo} alt="mastercraft logo" />
	<h1>Mastercraft Bamboo Monitor Riser</h1>
	<p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
	<div>
		<button on:click={openModal}>Back this project</button>
		<button on:click={bookmark}>
			<!-- <img src={isBookmarked ? bookmarkDoneIcon : bookmarkIcon} alt="" /> -->
			<p>{isBookmarked ? "Bookmarked" : "Bookmark"}</p>
		</button>
	</div>
</section>
