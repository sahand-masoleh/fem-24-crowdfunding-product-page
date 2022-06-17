<script>
	// @ts-nocheck
	import "../styles/About.scss";

	import { options } from "./store";
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();
	function handleSelect(value) {
		dispatch("open-modal", { value });
	}
</script>

<section class="about">
	<h2 class="about__title">About this project</h2>
	<p class="about__text">
		The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that
		elevates your screen to a more comfortable viewing height. Placing your
		monitor at eye level has the potential to improve your posture and make you
		more comfortable while at work, helping you stay focused on the task at
		hand.
	</p>
	<p class="about__text">
		Featuring artisan craftsmanship, the simplicity of design creates extra desk
		space below your computer to allow notepads, pens, and USB sticks to be
		stored under the stand.
	</p>

	{#each $options as { name, value, min, text, left }, index}
		{#if min}
			<div class={`about-option ${left < 1 ? "about-option--disabled" : ""}`}>
				<h3 class="about-option__title">{name}</h3>
				<span class="about-option__min">Pledge ${min} or more</span>
				<p class="about-option__text">{text}</p>
				<div class="about-option__left-container">
					<span class="about-option__left-num">{left}</span>
					<span class="about-option__left-text">left</span>
				</div>
				<button
					on:click={() => handleSelect(value)}
					class={`about-option__button ${
						left > 1
							? "about-option__button--enabled"
							: "about-option__button--disabled"
					}`}>Select Reward</button
				>
			</div>
		{/if}
	{/each}
</section>
