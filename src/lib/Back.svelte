<script>
	// @ts-nocheck
	import "../styles/Back.scss";
	import OptionContainer from "./Option-Container.svelte";

	import { createEventDispatcher } from "svelte";
	const dispath = createEventDispatcher();
	function closeModal() {
		dispath("close-modal");
	}

	export let checked;

	import { options, totalPledge, backers } from "./store";
	function handlePledge(event) {
		const { value, pledge } = event.detail;
		console.log({ value, pledge });
		if (value !== "none") {
			options.update((data) => {
				let index = data.findIndex((e) => e.value === value);
				let newData = data.slice();
				newData[index].left--;
				return newData;
			});
		}
		totalPledge.update((n) => n + pledge * 1);
		backers.update((n) => n + 1);
	}
</script>

<div class="modal__bg" on:click={closeModal} />
<div class="back modal">
	<h2 class="back__title">Back this project</h2>
	<p class="back__text">
		Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the
		world?
	</p>
	<OptionContainer modal {checked} on:pledge={handlePledge} />
</div>
