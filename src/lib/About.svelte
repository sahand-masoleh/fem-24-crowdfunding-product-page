<script>
	// @ts-nocheck
	import "../styles/About.scss";
	import OptionContainer from "./Option-Container.svelte";
</script>

<section class="about card card--center">
	<h2 class="about__title card__title">About this project</h2>
	<p class="card__text">
		The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that
		elevates your screen to a more comfortable viewing height. Placing your
		monitor at eye level has the potential to improve your posture and make you
		more comfortable while at work, helping you stay focused on the task at
		hand.
	</p>
	<p class="card__text">
		Featuring artisan craftsmanship, the simplicity of design creates extra desk
		space below your computer to allow notepads, pens, and USB sticks to be
		stored under the stand.
	</p>
	<OptionContainer on:open-modal />
</section>
