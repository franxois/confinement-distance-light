<script context="module">
	// Disable ssr because <Position/> uses navigator.geolocation, a web API
	export const ssr = false;
</script>

<script lang="ts">
	import Position from '$lib/Position/index.svelte';
</script>

<svelte:head>
	<title>Confinement distance light</title>
</svelte:head>

<section>
	<Position />
</section>

<style lang="scss">
	section {
		text-align: center;
	}
</style>
