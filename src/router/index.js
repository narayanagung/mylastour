import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import GridDetails from "../views/GridDetails.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: Home,
		},
		{
			path: "/map",
			name: "map",
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import("../views/Map.vue"),
		},
		{
			path: "/about",
			name: "about",
			component: () => import("../views/About.vue"),
		},
		{
			path: "/image/:id",
			name: "gridDetails",
			component: GridDetails,
		},
	],
});

export default router;
