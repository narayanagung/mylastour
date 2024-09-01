<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
	<nav>
		<ul>
			<li>
				<RouterLink class="nav-link" to="/">home</RouterLink>
			</li>
			<li>
				<RouterLink class="nav-link" to="/map">map</RouterLink>
			</li>
		</ul>
	</nav>
</template>

<style lang="scss" scoped>
nav {
	font-size: 1.25rem;
	padding: 1rem;
	ul {
		display: flex;
		justify-content: center;
		gap: 1rem;
		li {
			list-style-type: none;

			.nav-link {
				color: white;
				text-decoration: none;
				transition: 150ms;

				&:hover {
					color: hsl(200, 100%, 50%);
					transition: 150ms;
				}
			}
		}
	}
}
</style>
