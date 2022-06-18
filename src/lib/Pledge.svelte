<script>
	// @ts-nocheck
	import "../styles/Pledge.scss";
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

<div class="pledge__curtain">
	{#if !hasSubmitted}
		<div class="pledge">
			<h2 class="pledge__title">
				Back this project
				<button on:click={closeModal} class="pledge__close" />
			</h2>
			<p class="pledge__text">
				Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
				the world?
			</p>
			<OptionContainer {checked} on:pledge={handlePledge} />
		</div>
	{:else}
		<div class="thankyou">
			<img src={checklcon} alt="" class="thankyou__icon" />
			<h2 class="thankyou__title">Thanks for your support!</h2>
			<p class="thankyou__text">
				Your pledge brings us one step closer to sharing Mastercraft Bamboo
				Monitor Riser worldwide. You will get an email once our campaign is
				completed.
			</p>
			<button on:click={closeModal} class="thankyou__button">Got it!</button>
		</div>
	{/if}
</div>
