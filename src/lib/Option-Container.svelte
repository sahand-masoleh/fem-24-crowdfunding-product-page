<script>
	// @ts-nocheck
	import Option from "./Option.svelte";
	import { options, totalPledge } from "./store";

	let checked;

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
	}
</script>

{#each $options as option}
	<Option {...option} bind:checked on:pledge={handlePledge} />
{/each}
