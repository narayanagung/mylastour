<script setup>
import Carousel from "../components/Carousel/Index.vue";
import Slide from "../components/Carousel/Slide.vue";

const carouselSlides = ["tkmz_1", "tkmz_2", "tkmz_3"];
function getImageUrl(slide) {
	return new URL(`../assets/Carousel/${slide}.jpg`, import.meta.url).href;
}
</script>
<template>
	<hgroup>
		<h1>why?</h1>
		<small>...</small>
	</hgroup>
	<section class="carousel-section">
		<Carousel :pagination="false" v-slot="{ currentSlide }" class="carousel">
			<Slide v-for="(slide, index) in carouselSlides" :key="index">
				<div v-show="currentSlide === index + 1" class="slide-info">
					<img :src="getImageUrl(slide)" alt="Carousel Images" />
				</div>
			</Slide>
		</Carousel>
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

.carousel-section {
	.carousel {
		position: relative;
		max-height: 100vh;
		height: $carousel-height;

		@media screen and (max-width: 1000px) {
			max-height: 50vh;
			height: 50vh;
		}

		.slide-info {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: $slide-width;
			max-height: 100%;
			text-align: center;

			@media screen and (max-width: 1000px) {
				width: 100%;
			}

			img {
				object-fit: cover;
			}
		}
	}
}
</style>
