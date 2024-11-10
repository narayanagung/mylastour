<template>
	<hgroup>
		<h1>memories</h1>
		<small>geolocation for each photos.</small>
	</hgroup>
	<section class="map-wrap">
		<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1xejczkd6NzBtjvTzyDgiz1OTK2C0Jj4&ehbc=2E312F&noprof=1" width="1920" height="1080"></iframe>
	</section>
</template>

<style lang="scss" scoped>
// $carousel-height: 100vh;
// $slide-width: 1200px;

h1 {
	text-shadow: 4px 4px hsl(200, 100%, 15%);
}

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
		border: 2px solid hsl(0, 0%, 100%);
		border-radius: 0.25rem;
	}
}
</style>
