<script>
	import "../styles/About.scss";
	// @ts-nocheck

	import { options } from "./store";
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

	{#each $options as { name, min, text, left }, index}
		{#if min}
			<div class={`option ${left < 1 ? "option--disabled" : ""}`}>
				<h3 class="option__title">{name}</h3>
				<span class="option__min">Pledge ${min} or more</span>
				<p class="option__text">{text}</p>
				<div class="option__left-container">
					<span class="option__left-num">{left}</span>
					<span class="option__left-text">left</span>
				</div>
				<button
					class={`option__button ${
						left > 1 ? "option__button--enabled" : "option__button--disabled"
					}`}>Select Reward</button
				>
			</div>
		{/if}
	{/each}
</section>
