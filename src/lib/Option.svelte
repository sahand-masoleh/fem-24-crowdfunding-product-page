<script>
	// @ts-nocheck
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
</script>

<section
	class={`option card card--left ${checked === value ? "option--checked" : ""}`}
	on:click={() => handleClick(value)}
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
	{#if left}
		<p class="option__left">{left} left</p>
	{/if}
</section>
