<script>
	// @ts-nocheck
	import "../styles/Pledge.scss";
	import { createEventDispatcher } from "svelte";

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

<section
	on:click={() => (left > 0 || left == undefined) && handleClick(value)}
	class={`modal-option ${
		checked == value
			? "modal-option--selected"
			: left < 1
			? "modal-option--disabled"
			: "modal-option--unselected"
	}`}
>
	<div class="modal-option__main">
		<div
			class={`modal-option__radio-container ${
				checked == value
					? "modal-option__radio-container--checked"
					: "modal-option__radio-container--unchecked"
			}`}
		>
			<input
				type="radio"
				name="pledge"
				id={value}
				{value}
				bind:group={checked}
				class="modal-option__radio"
			/>
		</div>
		<div class="modal-option__title-container">
			<h3 class="modal-option__title">{name}</h3>
			{#if min}
				<p class="modal-option__min">Pledge ${min} or more</p>
			{/if}
		</div>
		<p class="modal-option__text">
			{text}
		</p>
		{#if left != undefined}
			<div class="modal-option__left">
				<span class="modal-option__left-num">{left}</span>
				<span class="modal-option__left-text">left</span>
			</div>
		{/if}
	</div>

	{#if checked === value}
		<div class="modal-option__payment">
			<p class="modal-option__command">Enter your pledge</p>
			<div class="modal-option__input-container">
				<input type="text" bind:value={pledge} class="modal-option__input" />
			</div>
			<button
				disabled={!enough || left < 1}
				on:click={handleSubmit}
				class="modal-option__button">Continue</button
			>
		</div>
	{/if}
</section>
