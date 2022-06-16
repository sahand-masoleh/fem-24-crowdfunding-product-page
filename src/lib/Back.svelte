<script>
	// @ts-nocheck
	import "../styles/Back.scss";
	import checklcon from "../assets/images/icon-check.svg";

	import OptionContainer from "./Option-Container.svelte";

	import { createEventDispatcher } from "svelte";
	const dispath = createEventDispatcher();
	function closeModal() {
		dispath("close-modal");
	}

	export let checked;

	export let hasSubmitted = false;
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
		hasSubmitted = true;
	}
</script>

<div class="modal__bg" on:click={closeModal} />
{#if !hasSubmitted}
	<div class="back back--options modal">
		<h2 class="back__title">Back this project</h2>
		<p class="back__text">
			Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the
			world?
		</p>
		<OptionContainer modal {checked} on:pledge={handlePledge} />
	</div>
{:else}
	<div class="back back--thankyou modal">
		<img src={checklcon} alt="" class="back__icon" />
		<h2 class="back__title">Thanks for your support!</h2>
		<p class="back__text">
			Your pledge brings us one step closer to sharing Mastercraft Bamboo
			Monitor Riser worldwide. You will get an email once our campaign is
			completed.
		</p>
		<button class="back__button button" on:click={closeModal}>Got it!</button>
	</div>
{/if}
