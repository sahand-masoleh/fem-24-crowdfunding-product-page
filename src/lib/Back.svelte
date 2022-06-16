<script>
	// @ts-nocheck
	import "../styles/Back.scss";
	import OptionContainer from "./Option-Container.svelte";

	import { createEventDispatcher } from "svelte";
	const dispath = createEventDispatcher();
	function toggleModal() {
		dispath("close");
	}
</script>

<div class="modal__bg" on:click={toggleModal} />
<div class="back modal">
	<h2 class="back__title">Back this project</h2>
	<p class="back__text">
		Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the
		world?
	</p>
	<OptionContainer />
</div>
