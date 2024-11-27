<script setup></script>

<template>
	<div class="header">
		<h1>#mylastour</h1>
		<small>endless journey.</small>
	</div>
</template>

<style lang="scss" scoped>
h1 {
	text-shadow: 4px 4px hsl(200, 100%, 15%);
}
.header {
	font-size: 1.25rem;
	padding: 1rem;
	display: grid;
	place-content: center;

	@media screen and (max-width: 500px) {
		text-align: center;
	}
}
</style>
