<script setup>
import { RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
	<Navigation></Navigation>
	<RouterView></RouterView>
	<Footer></Footer>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

*,
*::after,
*::before {
	font-family: "Poppins", sans-serif;
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

#app {
	background: linear-gradient(45deg, hsla(240, 100%, 15%, 0.3), hsl(0, 0%, 5%), hsla(240, 100%, 15%, 0.3), hsl(0, 0%, 5%));
	background-repeat: no-repeat;
	background-size: cover;
}

html,
body {
	color: white;
	height: 100%;
	background-color: hsl(0, 0%, 5%);
}

img {
	display: block;
	max-width: 100%;
}
</style>
