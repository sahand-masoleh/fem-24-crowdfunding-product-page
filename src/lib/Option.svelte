<script>
	// @ts-nocheck
	import { createEventDispatcher } from "svelte";
	import "../styles/Option.scss";

	export let value;
	export let name;
	export let min;
	export let text;
	export let left;

	export let checked;
	function handleClick(value) {
		checked = value;
	}

	let pledge;
	$: enough = min ? pledge > min : pledge > 0;

	const dispath = createEventDispatcher();
	function handleSubmit() {
		if (min && pledge < min) {
			error = true;
		} else {
			dispath("pledge", { value, pledge });
		}
	}
</script>

<section
	class={`option card card--left ${
		checked === value ? "option--checked" : ""
	} ${left === 0 ? "option--disabled" : ""}`}
	on:click={() => left != 0 && handleClick(value)}
>
	<div class="option__title">
		<input
			type="radio"
			class="option__org-checkbox"
			name="pledge"
			id={value}
			{value}
			bind:group={checked}
		/>
		<span class="option__checkbox" />
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
		<p class="option__left">{left} left</p>
	{/if}

	{#if checked === value}
		<hr class="option__divider" />
		<p class="card__text">Enter your pledge</p>
		<div class="card__container">
			<div class="option__input-container">
				<input type="text" bind:value={pledge} class="option__input" />
			</div>
			<button
				class="option__button button"
				disabled={!enough}
				on:click={handleSubmit}>Continue</button
			>
		</div>
	{/if}
</section>
