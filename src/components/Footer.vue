<script setup>
import { Instagram, Github, Heart } from "lucide-vue-next";
</script>

<template>
	<div class="footer">
		<ul>
			<li>
				<small>Made with 💟 by narayanagung</small>
			</li>
			<li>
				<a href="https://www.instagram.com/narayanagung" title="Instagram" target="_blank"
					><Instagram color="#fff" size="0.9rem" :stroke-width="2"
				/></a>
			</li>
			<li>
				<a href="https://github.com/narayanagung" title="Github" target="_blank"><Github color="#fff" size="0.9rem" :stroke-width="2" /></a>
			</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
.footer {
	display: grid;
	place-content: center;
	padding-inline: 1rem;
	padding-block: 2rem;
	margin-top: auto;

	ul {
		display: flex;
		align-items: center;
		list-style: none;
		gap: 0.5rem;

		li {
			display: flex;

			small,
			a {
				display: flex;
				align-items: center;
				gap: 0.3rem;
			}
		}
	}
}
</style>
