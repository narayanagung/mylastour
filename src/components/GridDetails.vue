<script setup>
import { useRoute } from "vue-router";
import { imagesData } from "../data/images.js";
import { MapPin, MapPinned } from "lucide-vue-next";

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
			<h1>{{ imageDetails.image_title }}</h1>
			<div class="subtitle">
				<a :href="imageDetails.link" class="pin" target="_blank" title="coordinates">
					<MapPin color="#d9d9d9" size="1rem" :stroke-width="3" />
					{{ imageDetails.location }}
				</a>
				<a href="https://www.instagram.com/explore/search/keyword/?q=%23mylastour" class="hashtag" title="hashtag" target="_blank">#mylastour</a>
			</div>
		</hgroup>
		<main>
			<img :src="getImageUrl(imageDetails.id)" alt="detailed view of the photos" />
			<p class="description">{{ imageDetails.description }}</p>
			<section>
				<h1>📝</h1>
				<p class="image-notes">{{ imageDetails.notes_content }}</p>
			</section>
			<a :href="imageDetails.link" class="take-me-btn" target="_blank" title="precise location where the photos are taken"
				>take me there <MapPinned color="#fff" size="1.8rem" :stroke-width="2"
			/></a>
			<div class="mini-map" title="mini map">
				<iframe :src="imageDetails.mini_map" width="650" height="450" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>
			</div>
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

	.mini-map {
		margin-top: 3rem;

		iframe {
			max-width: 100%;
			border: 2px solid hsl(0, 0%, 100%);
			border-radius: 0.25rem;
			box-shadow: 0px 5px 15px hsla(0, 0%, 100%, 0.3);
		}
	}

	.take-me-btn {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		margin-top: 3rem;
		padding: 0.5rem 1rem;
		text-decoration: none;
		outline: 2px solid hsl(0, 0%, 100%);
		color: hsl(0, 0%, 100%);
		border-radius: 0.5rem;
		font-size: 1.7rem;
		font-weight: bold;
		text-shadow: 4px 4px hsl(200, 100%, 15%);
		background-color: hsla(200, 100%, 15%, 0.5);
		transition: 150ms;

		&:hover {
			transition: 150ms;
			background-color: hsl(200, 100%, 30%);
		}
	}

	section {
		padding-top: 1rem;

		h1 {
			text-shadow: 4px 4px hsl(200, 100%, 15%);
			padding-bottom: 0.5rem;
			font-size: 2rem;
			text-align: center;
		}

		.image-notes {
			text-align: left;
			margin-inline: 25rem;
			// font-style: italic;

			@media screen and (max-width: 1200px) {
				margin-inline: 10rem;
			}

			@media screen and (max-width: 800px) {
				margin-inline: 2.5rem;
			}

			@media screen and (max-width: 600px) {
				text-align: center;
			}

			@media screen and (max-width: 500px) {
				margin-inline: 1rem;
			}
		}
	}

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
		padding-bottom: 1rem;
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
