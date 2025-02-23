<script setup>
// countdown setup
import { ref, onMounted } from "vue";

// change this to whenever you like. new Date(year, month[0 indexed so january is 0 and so on], date)
const targetDate = new Date(2024, 9, 30);

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
		formattedCountdown.value = "0H : 0m : 0s";
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
		<!-- <div class="content">
			<p style="padding-bottom: 1rem; text-align: center">release date</p>
			<a href="https://www.instagram.com/p/DBGgLvvy8Mi/" target="_blank"><img src="..\assets\Img\gltelex.webp" alt="glt manga" /></a>
			<p class="time">coming soon</p>
		</div> -->
		<!-- main div -->
		<div class="content">
			<h2>attention!</h2>
			<a href="https://www.instagram.com/p/DBGgLvvy8Mi/" title="published by Elex Media" target="_blank">
				<img src="..\assets\Img\gltelex.webp" alt="glt manga" />
			</a>
			<p class="time" v-if="!countdownEnded">
				{{ formattedDays }} days until release <br />
				<b class="timeout">{{ formattedCountdown }}</b>
			</p>
			<p class="time" v-else-if="countdownEnded">
				{{ formattedDays }} <br />
				<b class="timeout">{{ formattedCountdown }}</b> <br />
				<span>endless journey await</span>
			</p>
		</div>
	</div>
	<br />
	<hgroup>
		<h2><summary>synopsis</summary></h2>
	</hgroup>
	<section>
		<p>
			<i>
				"as they traverse a desolate world aboard their motorized vehicle. the world they inhabit is on the brink of total collapse, with vast, decaying
				cityscapes and empty factories devoid of life. society as they once knew it has long disappeared, leaving them to scavenge for food, fuel, and
				shelter while exploring the ruins of civilization"
			</i>
		</p>
		<div class="image-stack">
			<img src="../assets/Img/tour.jpg" title="all credit to Tsukumizu" alt="tour so far" />
		</div>
	</section>
	<br />
	<section>
		<hgroup>
			<h2><summary>how is this relevant?</summary></h2>
			<!-- <small>...</small> -->
		</hgroup>
		<p>
			<i>Girl's Last Tour</i> is a six-volume comic by Tsukumizu that profoundly changed the way i live in this world. during some of the most exhausting
			and fearful moments of my life, this comic influenced me to let go and not overthink the small details of life, saving me from many of the dangers
			that were constantly on my mind. the instagram account, along with the theme and photos I post, stemmed from my decision to approach social media
			more honestly, no longer obsessing over the 'image' that used to make me anxious and fearful about what to share with others.
		</p>
		<br />
		<p>
			this shift began during what I consider the worst year i've ever experienced and i'm sure many would agree-2020, the start of the COVID-19 pandemic.
			having so much free time didn't necessarily bring happiness, especially since school at that time didn't feel like it used to be at all. after
			graduating from vocational school, working immediately became a necessity due to our financial situation, which was, well, not great.
		</p>
		<br />
		<p>
			2021, i found that working (fortunately) was much more enjoyable than i had expected. yes, there were stressful and overwhelming moments, just like
			in school, but at least there was compensation for the stress in the end of each month (i guess). of course, i couldn't use all of it for myself,
			definitely not-but it was enough to cover a month's worth of fuel for my motorcycle and maybe a little for snacks.
		</p>
		<br />
		<p>
			commuting to work monday through friday and then go home from my rented room over the course of a year really made me fall in love with riding my
			motorcycles. it all started with my daily school commute in 2016, covering about 16 kilometers a day, and then evolved into weekly trips of around
			120 kilometers to return home from where I was working in 2021, i became very familiar with the roads I traveled regularly.
		</p>
		<br />
		<p>
			that's when an idea struck me
			<i>'if i can ride 120 kilometers a week on my motorcycle, wouldn't it be easy to ride all around Bali in just three days?'</i> i thought to myself.
			and with that thought, combined with my love for traveling, i began #mylastour.
		</p>
	</section>
	<section>
		<div class="foot">
			<img src="../assets/Img/glt.png" title="all credit to Tsukumizu" alt="glt end of 1st volume" />
		</div>
	</section>
</template>

<style lang="scss" scoped>
h2 {
	text-shadow: 4px 4px hsl(200, 100%, 15%);
	text-align: center;
}

.announcement {
	display: grid;
	place-content: center;
	font-size: 1.8rem;
	padding-top: 1rem;
	margin-inline: 1rem;
	// background-color: hsla(208, 100%, 97%, 0.384);

	.time {
		padding-top: 1rem;
		text-align: center;

		.timeout {
			font-size: 1.8rem;
			color: hsl(200, 100%, 50%);
			// padding: 0.5rem 1rem;
			// outline: 2px solid hsl(0, 0%, 100%);
		}

		span {
			font-size: 1.5rem;
		}
	}

	img {
		display: block;
		width: 18rem;
		margin-left: auto;
		margin-right: auto;
		border: 2px solid hsl(0, 0%, 100%);
		border-radius: 0.25rem;
		// box-shadow: 0px 0px 20px hsla(0, 0%, 100%, 0);
		box-shadow: 0px 5px 15px hsla(0, 0%, 100%, 0.3);
		// transition: 500ms;

		// &:hover {
		// 	box-shadow: 0px 0px 35px hsl(0, 0%, 100%);
		// 	transition: 500ms;
		// }
	}
}

.content {
	padding-inline: 10rem;
	text-align: center;
	// background: linear-gradient(45deg, hsla(240, 100%, 10%, 0.5), hsl(0, 0%, 5%), hsla(240, 100%, 10%, 0.5), hsl(0, 0%, 5%));
	background-repeat: no-repeat;
	background-size: 250%;
	// border-top: hsla(0, 0%, 100%, 0.5) solid 1rem;
	// box-shadow: 0px 5px 15px 5px rgba(0, 85, 255, 0.1);

	h2 {
		padding-bottom: 1rem;
	}
}

hgroup {
	display: grid;
	place-content: center;
	padding-top: 0;
	padding-bottom: 1rem;
	padding-inline: 1rem;
	font-size: 1.25rem;

	span {
		color: hsl(0, 0%, 80%);
	}
}

section .image-stack {
	display: flex;
	justify-content: center;
	padding-block: 2rem;

	img {
		width: 100%;
		border: 2px solid hsl(0, 0%, 100%);
		border-radius: 0.25rem;
		box-shadow: 0px 5px 15px hsla(0, 0%, 100%, 0.3);
	}
}

section .foot {
	display: flex;
	justify-content: center;
	padding-top: 2rem;

	img {
		width: 100%;
		border: 2px solid hsl(0, 0%, 100%);
		border-radius: 0.25rem;
		box-shadow: 0px 5px 15px hsla(0, 0%, 100%, 0.3);
	}
}

// Resposive stuff
@media screen and (min-width: 700px) {
	section {
		padding-inline: 25rem;
	}

	p {
		text-align: justify;
	}

	.image-stack {
		padding-block: 2rem;
	}

	section .foot {
		padding-top: 2rem;
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

	.image-stack {
		padding-block: 1rem;
	}

	section .foot {
		padding-top: 1rem;
	}
}
</style>
