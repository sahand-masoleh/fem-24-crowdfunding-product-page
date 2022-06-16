<script>
	// @ts-nocheck
	import "../styles/About.scss";
	import OptionContainer from "./Option-Container.svelte";
</script>

<section class="about card card--center">
	<h2 class="about__title card__title">About this project</h2>
	<p class="card__text">
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut perspiciatis
		cum incidunt nisi consectetur tempore eos nobis minima saepe ipsam
		recusandae, aliquid nihil consequatur pariatur fuga, libero perferendis
		blanditiis mollitia necessitatibus doloribus explicabo! Sequi, cumque illum
		nobis corporis accusamus vitae et dolore quas voluptatum velit officia? Iure
		dolore est architecto temporibus et fugiat tempora quis veritatis tenetur
	</p>

	<OptionContainer on:open-modal />
</section>
