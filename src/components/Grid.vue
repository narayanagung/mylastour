<script setup>
import { ref, computed } from "vue";
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";

const router = useRouter();

const numberOfImages = 57;
const Images = ref(Array.from({ length: numberOfImages }, (_, i) => `grid-${String(i + 1).padStart(2, "0")}`));

const sortKey = ref("newest");
const btnText = ref("oldest");

const sortedImages = computed(() => {
	const sortedArray = [...Images.value];

	if (sortKey.value === "newest") {
		sortedArray.sort((a, b) => b.localeCompare(a));
		btnText.value = `Newest (${new Date().getFullYear()})`;
	} else if (sortKey.value === "oldest") {
		sortedArray.sort((a, b) => a.localeCompare(b));
		btnText.value = "Oldest (2021)";
	}

	return sortedArray;
});

const sortToggle = () => {
	sortKey.value = sortKey.value === "newest" ? "oldest" : "newest";
};

function getImageUrl(image) {
	return new URL(`../assets/Grid/${image}.jpg`, import.meta.url).href;
}

const goToImageDetails = (imageId) => {
	router.push(`/image/${imageId}`);
};

const isModalOpen = ref(false);
const selectedImage = ref(null);

const openModal = (image) => {
	selectedImage.value = image;
	isModalOpen.value = true;
};

const closeModal = () => {
	isModalOpen.value = false;
	selectedImage.value = null;
};
</script>

<template>
	<BaseLayout>
		<div class="btn-wrap">
			<button @click="sortToggle" title="Sort">
				<Icon icon="mdi:sort" width="20" height="20" /><span>{{ btnText }}</span>
			</button>
		</div>
		<div class="grid">
			<div v-for="(image, index) in sortedImages" :key="index" class="grid-image-link" @click="goToImageDetails(image)">
				<img :src="getImageUrl(image)" loading="lazy" alt="Grid Images" class="grid-image" />
			</div>
		</div>
		<!-- <transition name="fade-zoom">
			<div v-if="isModalOpen" class="modal" @click.self="closeModal">
				<div class="modal-content">
					<span class="close" @click="closeModal"><Icon icon="mdi:close" width="30" height="30" /></span>
					<img :src="getImageUrl(selectedImage)" alt="Selected Grid Image" />
					<p class="watermark">#mylastour</p>
				</div>
			</div>
		</transition> -->
	</BaseLayout>
</template>

<style lang="scss" scoped>
.close {
	float: right;
	cursor: pointer;
}

.modal {
	position: fixed;
	z-index: 1;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgba(0, 0, 0, 0.8);
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		border-radius: 0.25rem;
		border: 2px solid hsl(0, 0%, 100%);
	}
}

.modal-content {
	padding: 0.5rem;
	width: 100%;
	max-width: 40rem;
	border-radius: 0.25rem;

	img {
		cursor: default;
	}
	.watermark {
		cursor: text;
		padding-top: 0.3rem;
	}
}

.btn-wrap {
	display: flex;
	justify-content: center;
	padding-top: 1rem;
	padding-bottom: 2rem;

	button {
		font-weight: 500;
		gap: 0.5rem;
		display: flex;
		align-items: center;
		border: none;
		color: white;
		background: none;
		cursor: pointer;
		outline: 2px solid #fff;
		border-radius: 0.25rem;
		padding: 0.3rem 0.6rem;
		transition: 150ms;

		&:hover {
			outline: 2px solid hsl(200, 100%, 50%);
			transition: 150ms;
		}
	}
}

.grid {
	img {
		border: 2px solid transparent;
		border-radius: 0.25rem;
	}
}

.grid-image {
	transition: 500ms;
	&:hover {
		transform: scale(0.99);
		// border: 2px solid hsl(0, 0%, 100%);
		transition: 500ms;
	}
}

// Animation
.fade-zoom-enter-active,
.fade-zoom-leave-active {
	transition: opacity 0.4s, transform 0.4s;
}

.fade-zoom-enter-from,
.fade-zoom-leave-to {
	opacity: 0;
	transform: translateY(100%);
}

.fade-zoom-enter-to,
.fade-zoom-leave-from {
	opacity: 1;
	transform: translateY(0) scale(1);
}

@media screen and (min-width: 700px) {
	.grid {
		display: grid;
		gap: 0.125rem;
		padding-inline: 0.125rem;
		grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));

		img {
			max-width: 100%;
		}
	}
}

@media screen and (max-width: 700px) {
	.grid {
		gap: 0.1rem;
		padding-inline: 0.1rem;
		display: grid;
	}
	.grid-image {
		&:hover {
			border: solid 1px transparent;
		}
	}
	.modal-content {
		padding: 0.7rem;
	}

	.btn-wrap {
		button {
			&:hover {
				outline: 2px solid hsl(0, 0%, 100%);
			}
		}
	}
}
</style>
