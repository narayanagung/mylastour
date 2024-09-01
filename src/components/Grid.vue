<script setup>
import { ref, computed } from "vue";
import { Icon } from "@iconify/vue";

const numberOfImages = 58;
const Images = ref(Array.from({ length: numberOfImages }, (_, i) => `grid-${String(i + 1).padStart(2, "0")}`));

const sortKey = ref("newest");
const btnText = ref("Oldest");

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
</script>

<template>
	<div class="btn-wrap">
		<button @click="sortToggle" title="Sort">
			<Icon icon="mdi:sort" width="20" height="20" /><span>{{ btnText }}</span>
		</button>
	</div>
	<div class="grid">
		<img v-for="(image, index) in sortedImages" :key="index" :src="getImageUrl(image)" loading="lazy" alt="Grid Images" />
	</div>
</template>

<style lang="scss" scoped>
.btn-wrap {
	display: flex;
	justify-content: center;
	padding-top: 1rem;
	padding-bottom: 1rem;

	:hover {
		transition: 150ms;
		background-color: #fff;
		color: #000;
	}

	button {
		font-weight: 500;
		gap: 0.5rem;
		display: flex;
		align-items: center;
		border: none;
		color: white;
		background: none;
		cursor: pointer;
		outline: 1px solid #fff;
		border-radius: 4px;
		padding: 0.3rem 0.6rem;
		transition: 150ms;
	}
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
		gap: 0.25rem;
		padding-inline: 0.25rem;
		display: grid;
	}
}
</style>
