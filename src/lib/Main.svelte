<script>
	// @ts-nocheck
	import "../styles/Main.scss";
	import Intro from "./Intro.svelte";
	import Stats from "./Stats.svelte";
	import About from "./About.svelte";
</script>

<main class="main">
	<Intro on:open-modal />
	<Stats />
	<About on:open-modal />
</main>
