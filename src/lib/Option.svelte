<script>
	// @ts-nocheck
	import { createEventDispatcher } from "svelte";
	import "../styles/Option.scss";

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
		class={`option card card--left ${
			!modal ? "option--no-select" : checked === value ? "option--checked" : ""
		} ${left < 1 ? "option--disabled" : ""}`}
		on:click={() => modal && left > 0 && handleClick(value)}
	>
		<div class="option__title">
			{#if modal}
				<input
					type="radio"
					class="option__org-checkbox"
					name="pledge"
					id={value}
					{value}
					bind:group={checked}
				/>
				<span class="option__checkbox" />
			{/if}
			<div class="option__name-container">
				<h3 class="option__name">{name}</h3>
				{#if min}
					<p class="option__min">Pledge ${min} or more</p>
				{/if}
			</div>
		</div>
		<p class="option__text card__text">
			{text}
		</p>
		{#if left != undefined}
			<p class="card__text"><span class="option__left">{left}</span>left</p>
		{/if}

		{#if modal && checked === value}
			<hr class="option__divider" />
			<p class="option__enter card__text">Enter your pledge</p>
			<div class="card__container">
				<div class="option__input-container">
					<input type="text" bind:value={pledge} class="option__input" />
				</div>
				<button
					class="option__button button"
					disabled={!enough || left < 1}
					on:click={handleSubmit}>Continue</button
				>
			</div>
		{:else if !modal}
			<button
				class="about__button button"
				on:click={handleSelect}
				disabled={left < 1}>Select Rewards</button
			>
		{/if}
	</section>
{/if}
