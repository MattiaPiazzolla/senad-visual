<template>
	<div class="carousel-wrapper">
		<div v-if="!images.length" class="text-center py-4">No images found.</div>

		<div v-else class="carousel">
			<!-- Note the added carousel-inner div -->
			<div class="carousel-inner">
				<div
					class="carousel-container"
					:style="carouselStyle"
					@mouseenter="pauseAutoplay"
					@mouseleave="resumeAutoplay"
					@touchstart="handleTouchStart"
					@touchmove="handleTouchMove"
					@touchend="handleTouchEnd">
					<div
						v-for="(image, index) in images"
						:key="index"
						class="carousel-item">
						<img
							:src="image"
							:alt="`Carousel image ${index + 1}`"
							class="carousel-image"
							@dragstart.prevent />
					</div>
				</div>
			</div>

			<button
				@click="prev"
				class="carousel-nav carousel-prev"
				aria-label="Previous image">
				‹
			</button>
			<button
				@click="next"
				class="carousel-nav carousel-next"
				aria-label="Next image">
				›
			</button>

			<div class="carousel-indicators">
				<button
					v-for="(_, index) in images"
					:key="index"
					@click="goToSlide(index)"
					:class="['indicator-dot', { active: currentIndex === index }]"
					:aria-label="`Go to slide ${index + 1}`"></button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

// Import images using Vite's asset handling
const imageFiles = {
	iceland2: new URL("/public/list-one/bosnia.jpg", import.meta.url).href,
	bosnia: new URL("/public/list-one/bosnia.jpg", import.meta.url).href,
	iceland: new URL("/public/list-one/iceland.JPG", import.meta.url).href,
	norway: new URL("/public/list-one/norway.jpg", import.meta.url).href,
	spain: new URL("/public/list-one/spain.jpg", import.meta.url).href,
	norway2: new URL("/public/list-one/norway2.jpg", import.meta.url).href,
	turkey: new URL("/public/list-one/turkey.jpg", import.meta.url).href,
};

const currentIndex = ref(0);
const interval = ref(null);
const touchStartX = ref(null);
const touchEndX = ref(null);
const isPaused = ref(false);

const images = Object.values(imageFiles);

// Updated computed style
const carouselStyle = computed(() => ({
	transform: `translateX(-${currentIndex.value * 100}%)`,
	transition: "transform 0.5s ease-in-out",
	width: `${images.length * 100}%`, // Important: Set width based on number of images
}));

// Rest of the methods remain the same...
const next = () => {
	currentIndex.value = (currentIndex.value + 1) % images.length;
};

const prev = () => {
	currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
};

const goToSlide = (index) => {
	currentIndex.value = index;
};

const startAutoplay = () => {
	if (!interval.value) {
		interval.value = setInterval(next, 5000);
	}
};

const stopAutoplay = () => {
	if (interval.value) {
		clearInterval(interval.value);
		interval.value = null;
	}
};

const pauseAutoplay = () => {
	isPaused.value = true;
	stopAutoplay();
};

const resumeAutoplay = () => {
	isPaused.value = false;
	startAutoplay();
};

const handleTouchStart = (event) => {
	touchStartX.value = event.touches[0].clientX;
};

const handleTouchMove = (event) => {
	touchEndX.value = event.touches[0].clientX;
};

const handleTouchEnd = () => {
	if (!touchStartX.value || !touchEndX.value) return;

	const diff = touchStartX.value - touchEndX.value;
	const threshold = 50;

	if (Math.abs(diff) > threshold) {
		if (diff > 0) {
			next();
		} else {
			prev();
		}
	}

	touchStartX.value = null;
	touchEndX.value = null;
};

onMounted(() => {
	startAutoplay();
});

onBeforeUnmount(() => {
	stopAutoplay();
});
</script>

<style scoped>
.carousel-wrapper {
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
}

.carousel {
	position: relative;
	width: 100%;
	height: 500px; /* Adjust this height as needed */
	overflow: hidden;
	border-radius: 8px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* Added carousel-inner for proper positioning */
.carousel-inner {
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
}

.carousel-container {
	position: relative;
	height: 100%;
	display: flex;
	transition: transform 0.5s ease-in-out;
}

.carousel-item {
	flex: 0 0 auto;
	width: 100%; /* Each item takes full width of the container */
	height: 100%; /* Make sure the items take full height */
}

.carousel-image {
	width: 100%;
	height: 100%;
	object-fit: cover; /* Ensure the image covers the entire area */
	display: block;
	user-select: none;
}

/* Style for navigation buttons */
.carousel-nav {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	background-color: rgba(0, 0, 0, 0.5);
	color: white;
	border: none;
	font-size: 2rem;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: background-color 0.3s;
	z-index: 1;
}

.carousel-nav:hover {
	background-color: rgba(0, 0, 0, 0.7);
}

.carousel-prev {
	left: 16px;
}

.carousel-next {
	right: 16px;
}

/* Style for carousel indicators */
.carousel-indicators {
	position: absolute;
	bottom: 16px;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	gap: 8px;
	z-index: 1;
}

.indicator-dot {
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background-color: rgba(255, 255, 255, 0.5);
	border: none;
	cursor: pointer;
	transition: background-color 0.3s;
	padding: 0;
}

.indicator-dot.active {
	background-color: white;
}

@media (max-width: 768px) {
	.carousel-nav {
		width: 32px;
		height: 32px;
		font-size: 1.5rem;
	}

	.carousel {
		height: 300px;
	}
}
</style>
