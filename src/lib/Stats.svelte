<script>
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

<section>
	<div>
		<p>{formattedPledge}</p>
		<p>of $100,000 backed</p>
	</div>
	<hr />
	<div>
		<p>{formattedBackers}</p>
		<p>total backers</p>
	</div>
	<hr />
	<div>
		<p>56</p>
		<p>days left</p>
	</div>
	<div style={`--width: ${($totalPledge * 100) / 100000}%`} />
</section>
