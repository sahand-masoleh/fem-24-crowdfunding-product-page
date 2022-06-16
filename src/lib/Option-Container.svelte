<script>
	// @ts-nocheck

	import Option from "./Option.svelte";
	import { options } from "./store";

	export let modal;
	export let checked;
</script>

{#each $options as option}
	<Option {...option} {modal} bind:checked on:pledge on:open-modal />
{/each}
