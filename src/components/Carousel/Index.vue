<script setup>
import { ref, onMounted } from "vue";
import { Icon } from "@iconify/vue";

const props = defineProps(["autoplay", "timeout", "navigation", "pagination"]);

const currentSlide = ref(1);
const getSlideCount = ref(null);

const timeOutDuration = ref(props.timeout === undefined ? 5000 : props.timeout);
const autoPlayEnabled = ref(props.autoplay === undefined ? true : props.autoplay);
const paginationEnabled = ref(props.pagination === undefined ? true : props.pagination);
const navigationEnabled = ref(props.navigation === undefined ? true : props.navigation);

const nextSlide = () => {
	if (currentSlide.value === getSlideCount.value) {
		currentSlide.value = 1;
		return;
	}
	currentSlide.value += 1;
};

const prevSlide = () => {
	if (currentSlide.value === 1) {
		currentSlide.value = getSlideCount.value;
		return;
	}
	currentSlide.value -= 1;
};

const goToSlide = (index) => {
	currentSlide.value = index + 1;
};

const autoPlay = () => {
	setInterval(() => {
		nextSlide();
	}, timeOutDuration.value);
};

if (autoPlayEnabled.value) {
	autoPlay();
}

onMounted(() => {
	getSlideCount.value = document.querySelectorAll(".slide").length;
});
</script>

<template>
	<div class="carousel">
		<slot :currentSlide="currentSlide"></slot>

		<div v-if="navigationEnabled" class="navigate">
			<div class="toggle-page left">
				<Icon @click="prevSlide" class="icon-slide" icon="fluent:chevron-left-12-filled" color="white" width="30" height="30" />
			</div>
			<div class="toggle-page right">
				<Icon @click="nextSlide" class="icon-slide" icon="fluent:chevron-right-12-filled" color="white" width="30" height="30" />
			</div>
		</div>

		<div v-if="paginationEnabled" class="paginate">
			<span @click="goToSlide(index)" v-for="(slide, index) in getSlideCount" :key="index" :class="{ active: index + 1 === currentSlide }"> </span>
		</div>
	</div>
</template>

<style lang="scss" scoped>
$navigation-width: 1200px;

.carousel {
	position: relative;
	.navigate {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		max-height: 100%;
		width: $navigation-width;
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;

		@media screen and (max-width: 1000px) {
			width: 100%;
		}

		.toggle-page {
			display: flex;
			flex: 1;
		}
		.left {
			justify-content: flex-start;
			padding-left: 1rem;
		}
		.right {
			justify-content: flex-end;
			padding-right: 1rem;
		}

		.icon-slide {
			cursor: pointer;
			background-color: hsl(0, 0%, 0%);
			border-radius: 50%;
			padding: 0.2rem;
		}
	}
	.paginate {
		position: absolute;
		bottom: 15%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;

		span {
			cursor: pointer;
			border-radius: 50%;
			width: 15px;
			height: 15px;
			background-color: hsl(0, 0%, 100%);
		}

		.active {
			background-color: hsl(0, 0%, 0%);
		}
	}
}
</style>
