<script setup>
// carousel setup
// import Carousel from "../components/Carousel/Index.vue";
// import Slide from "../components/Carousel/Slide.vue";

// const carouselSlides = ["tkmz_1", "tkmz_2", "tkmz_3"];
// function getImageUrl(slide) {
// 	return new URL(`../assets/Carousel/${slide}.jpg`, import.meta.url).href;
// }

// countdown setup
import { ref, onMounted } from "vue";

// change this to whenever you like. new Date(year, month[0 indexed so january is 0 and so on], date)
const targetDate = new Date(2024, 9, 14);

const formattedCountdown = ref("");
const formattedDays = ref("");

// new ref to check if countdown ended
const countdownEnded = ref(false);

// reference for the interval ID
let intervalId = null;

const updateCountdown = () => {
	const now = new Date();
	const difference = targetDate - now;

	if (difference <= 0) {
		// stop the countdown if time has passed
		formattedCountdown.value = "00H : 00m : 00s";
		formattedDays.value = "it's here";
		countdownEnded.value = true; // mark countdown as ended
		clearInterval(intervalId); // stop the interval
		return;
	}

	const days = Math.floor(difference / (1000 * 60 * 60 * 24));
	const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((difference % (1000 * 60)) / 1000);

	formattedDays.value = `${days}`;
	formattedCountdown.value = `${hours}H : ${minutes}m : ${seconds}s`;
};

onMounted(() => {
	updateCountdown();
	setInterval(updateCountdown, 1000);
});
</script>

<template>
	<div class="announcement">
		<!-- temporary div -->
		<div class="content">
			<img src="..\assets\Img\glt.webp" alt="glt manga" />
			<p class="time">
				<span>⏳<b>coming soon</b></span>
			</p>
		</div>
		<!-- <div class="content">
			<img src="..\assets\Img\glt.webp" alt="glt manga" />
			<p class="time" v-if="!countdownEnded">
				{{ formattedDays }} Days until release <br />
				{{ formattedCountdown }}
			</p>
			<p class="time" v-else-if="countdownEnded">
				{{ formattedDays }} <br />
				{{ formattedCountdown }} <br />
				<span>endless journey await</span>
			</p>
		</div> -->
	</div>
	<hgroup>
		<h2>why?</h2>
		<!-- <small>...</small> -->
	</hgroup>
	<section>
		<!-- <h2>summary</h2> -->
		<p>
			"as they traverse a desolate world aboard their motorized vehicle. the world they inhabit is on the brink of total collapse, with vast, decaying
			cityscapes and empty factories devoid of life. society as they once knew it has long disappeared, leaving them to scavenge for food, fuel, and
			shelter while exploring the ruins of civilization."
		</p>
	</section>
	<!-- <section class="carousel-section">
		<Carousel :pagination="false" v-slot="{ currentSlide }" class="carousel">
			<Slide v-for="(slide, index) in carouselSlides" :key="index">
				<div v-show="currentSlide === index + 1" class="slide-info">
					<img :src="getImageUrl(slide)" alt="Carousel Images" />
				</div>
			</Slide>
		</Carousel>
	</section> -->
</template>

<style lang="scss" scoped>
// $carousel-height: 100vh;
// $slide-width: 1200px;

.announcement {
	display: grid;
	place-content: center;
	font-size: 2rem;
	padding-block: 1rem;
	// background-color: hsla(208, 100%, 97%, 0.384);

	.time {
		padding-top: 1rem;

		span {
			font-size: 1.5rem;
		}
	}

	img {
		display: block;
		width: 10rem;
		margin-left: auto;
		margin-right: auto;
	}

	.content {
		padding-block: 1rem;
		padding-inline: 10rem;
		text-align: center;
		background: linear-gradient(45deg, hsla(240, 100%, 10%, 0.5), hsl(0, 0%, 5%), hsla(240, 100%, 10%, 0.5), hsl(0, 0%, 5%));
		background-repeat: no-repeat;
		background-size: 250%;
		// border-top: hsla(0, 0%, 100%, 0.5) solid 1rem;
		// box-shadow: 0px 5px 15px 5px rgba(0, 85, 255, 0.1);
	}
}

hgroup {
	display: grid;
	place-content: center;
	padding: 1rem;
	font-size: 1.25rem;

	span {
		color: hsl(0, 0%, 80%);
	}
}

@media screen and (min-width: 700px) {
	section {
		padding-inline: 25rem;
	}
	p {
		text-align: justify;
	}
}

@media screen and (max-width: 1025px) {
	.announcement {
		.content {
			padding-inline: 1rem;
		}
	}

	section {
		padding-inline: 2rem;
	}

	p {
		text-align: center;
	}
}

// .carousel-section {
// 	.carousel {
// 		position: relative;
// 		max-height: 100vh;
// 		height: $carousel-height;

// 		@media screen and (max-width: 1000px) {
// 			max-height: 50vh;
// 			height: 50vh;
// 		}

// 		.slide-info {
// 			position: absolute;
// 			top: 50%;
// 			left: 50%;
// 			transform: translate(-50%, -50%);
// 			width: $slide-width;
// 			max-height: 100%;
// 			text-align: center;

// 			@media screen and (max-width: 1000px) {
// 				width: 100%;
// 			}

// 			img {
// 				object-fit: cover;
// 			}
// 		}
// 	}
// }
</style>
