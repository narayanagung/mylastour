<script setup></script>

<template>
	<div class="slide">
		<transition name="slide">
			<slot></slot>
		</transition>
	</div>
</template>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
	transition: all 0.5s ease-out;
}

.slide-enter-from,
.slide-leave-to {
	opacity: 0;
}
</style>
