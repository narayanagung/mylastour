<script setup>
import { useRoute } from "vue-router";
import { imagesData } from "../data/images.js";
import { MapPin } from "lucide-vue-next";

const route = useRoute();
const imageId = route.params.id;

// Find the image data based on the id from the route
const imageDetails = imagesData.find((img) => img.id === imageId);

// Dynamically compute the image URL
function getImageUrl(image) {
	return new URL(`../assets/Grid/${image}.jpg`, import.meta.url).href;
}
</script>

<template>
	<div v-if="imageDetails">
		<hgroup>
			<h1>{{ imageDetails.title }}</h1>
			<div class="subtitle">
				<a :href="imageDetails.link" class="pin" target="_blank" title="Go to location">
					<MapPin color="#d9d9d9" size="1rem" :stroke-width="3" />
					{{ imageDetails.location }}
				</a>
				<a href="https://www.instagram.com/explore/search/keyword/?q=%23mylastour" class="hashtag" title="Go to hashtag" target="_blank">#mylastour</a>
			</div>
		</hgroup>
		<main>
			<img :src="getImageUrl(imageDetails.id)" alt="Detailed View" />
			<p class="description">{{ imageDetails.description }}</p>
		</main>
	</div>
	<div v-else>
		<div class="error">
			<hgroup>
				<h1>coming soon</h1>
			</hgroup>
			<img src="../assets/Img/glt.gif" title="yay! we're dying!" alt="glt gif" />
			<!-- <p>in the meantime check out my socials below</p>
			<hr style="width: 50vw; margin-top: 1rem; margin-inline: auto" /> -->
		</div>
	</div>
</template>

<style lang="scss" scoped>
hgroup {
	display: grid;
	place-content: center;
	padding: 1rem;
	font-size: 1.25rem;
	text-align: center;

	h2 {
		text-shadow: 4px 4px hsl(200, 100%, 15%);
	}

	.subtitle {
		display: flex;
		font-size: 1rem;
		gap: 0.5rem;

		.pin {
			display: flex;
			align-items: center;
			color: hsl(0, 0%, 85%);
			gap: 0.1rem;
			text-decoration: none;
			transition: 150ms;

			&:hover {
				color: hsl(0, 0%, 100%);
				transition: 150ms;
			}
		}

		.hashtag {
			color: hsl(0, 0%, 85%);
			transition: 150ms;
			text-decoration: none;

			&:hover {
				transition: 150ms;
				color: hsl(0, 0%, 100%);
			}
		}
	}

	h1 {
		text-shadow: 4px 4px hsl(200, 100%, 15%);
		padding-bottom: 0.5rem;
	}
}

main {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-inline: 0.5rem;

	img {
		width: 40rem;
		border-radius: 0.25rem;
		border: 2px solid hsl(0, 0%, 100%);
		box-shadow: 0px 5px 15px hsla(0, 0%, 100%, 0.3);
	}

	.description {
		padding-top: 1rem;
		text-align: center;
		color: hsl(0, 0%, 85%);
		font-style: italic;
	}

	.notes {
		margin: auto 5rem;
		text-align: center;
	}
}

.error {
	text-align: center;
	font-size: 2.5rem;

	img {
		padding-inline: 1rem;
		margin: 0 auto;
		width: 20rem;
	}

	p {
		padding-top: 1rem;
		font-size: 1rem;
	}

	hgroup {
		h1 {
			padding-bottom: 0;
		}
	}
}
</style>
