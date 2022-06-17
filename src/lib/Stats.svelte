<script>
	// @ts-nocheck
	import "../styles/Stats.scss";
	import { totalPledge, backers } from "./store";

	$: formattedPledge = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		maximumFractionDigits: 0,
	}).format($totalPledge);

	$: formattedBackers = new Intl.NumberFormat("en-US", {
		style: "decimal",
	}).format($backers);
</script>

<section class="stats">
	<div class="stats__container">
		<p class="stats__num">{formattedPledge}</p>
		<p class="stats__desc">of $100,000 backed</p>
	</div>
	<hr class="stats__divider" />
	<div class="stats__container">
		<p class="stats__num">{formattedBackers}</p>
		<p class="stats__desc">total backers</p>
	</div>
	<hr class="stats__divider" />
	<div class="stats__container">
		<p class="stats__num">56</p>
		<p class="stats__desc">days left</p>
	</div>
	<div
		style={`--width: ${($totalPledge * 100) / 100000}%`}
		class="stats__bar"
	/>
</section>
