<template>
	<hgroup>
		<h1>memories</h1>
		<small>geolocation for each location.</small>
	</hgroup>
	<section class="map-wrap">
		<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1xejczkd6NzBtjvTzyDgiz1OTK2C0Jj4&ehbc=2E312F&noprof=1" width="1000" height="800"></iframe>
	</section>
</template>

<style lang="scss" scoped>
$carousel-height: 100vh;
$slide-width: 1200px;

hgroup {
	display: grid;
	place-content: center;
	padding: 1rem;
	font-size: 1.25rem;
}

.map-wrap {
	display: grid;
	place-content: center;
	padding-inline: 0.5rem;
	padding-top: 1rem;

	iframe {
		max-width: 100%;
	}
}
</style>
