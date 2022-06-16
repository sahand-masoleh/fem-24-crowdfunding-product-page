<script>
	// @ts-nocheck
	import { createEventDispatcher } from "svelte";

	export let value;
	export let name;
	export let min;
	export let text;
	export let left;

	export let modal;
	export let checked;
	function handleClick(value) {
		checked = value;
	}

	let pledge;
	$: enough = min ? pledge >= min : pledge > 0;

	const dispatch = createEventDispatcher();
	function handleSubmit() {
		if (!min || pledge >= min) {
			dispatch("pledge", { value, pledge });
		}
	}

	function handleSelect() {
		dispatch("open-modal", { value });
	}
</script>

{#if modal || value !== "none"}
	<section
		on:click={() =>
			modal && (left > 0 || left == undefined) && handleClick(value)}
	>
		<div class="option">
			{#if modal}
				<input
					type="radio"
					name="pledge"
					id={value}
					{value}
					bind:group={checked}
				/>
				<span />
			{/if}
			<div>
				<h3>{name}</h3>
				{#if min}
					<p>Pledge ${min} or more</p>
				{/if}
			</div>
		</div>
		<p>
			{text}
		</p>
		{#if left != undefined}
			<p><span>{left}</span>left</p>
		{/if}

		{#if modal && checked === value}
			<hr />
			<p>Enter your pledge</p>
			<div>
				<div>
					<input type="text" bind:value={pledge} />
				</div>
				<button disabled={!enough || left < 1} on:click={handleSubmit}
					>Continue</button
				>
			</div>
		{:else if !modal}
			<button on:click={handleSelect} disabled={left < 1}>Select Rewards</button
			>
		{/if}
	</section>
{/if}
