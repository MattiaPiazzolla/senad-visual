<template>
	<div
		class="carousel-container"
		ref="carouselContainer"
		@mouseenter="pauseAutoplay"
		@mouseleave="resumeAutoplay">
		<div
			class="carousel-track"
			:style="{ transform: `translateX(-${currentIndex * 100}%)` }">
			<div v-for="(image, index) in images" :key="index" class="carousel-slide">
				<img :src="image.src" :alt="image.alt" @click="openLightbox(index)" />
			</div>
		</div>
		<button class="nav-button prev" @click="manualPrevSlide">←</button>
		<button class="nav-button next" @click="manualNextSlide">→</button>
	</div>

	<div v-if="lightboxOpen" class="lightbox" @click="closeLightbox">
		<img
			:src="images[currentLightboxIndex].src"
			:alt="images[currentLightboxIndex].alt" />
		<button class="nav-button prev" @click.stop="prevLightboxImage">←</button>
		<button class="nav-button next" @click.stop="nextLightboxImage">→</button>
		<button class="close-lightbox" @click.stop="closeLightbox">×</button>
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const images = [
	{ src: "../../public/list-one/bosnia.jpg", alt: "Bosnia" },
	{ src: "../../public/list-one/iceland.JPG", alt: "Iceland" },
	{ src: "../../public/list-one/jordan.jpg", alt: "Jordan" },
	{ src: "../../public/list-one/norway.jpg", alt: "Norway" },
	{ src: "../../public/list-one/spain.jpg", alt: "Spain" },
	{ src: "../../public/list-one/iceland2.JPG", alt: "Iceland 2" },
	{ src: "../../public/list-one/turkey.jpg", alt: "Turkey" },
	{ src: "../../public/list-one/norway2.jpg", alt: "Norway 2" },
];

const currentIndex = ref(0);
const lightboxOpen = ref(false);
const currentLightboxIndex = ref(0);
let autoplayInterval = null;
let autoplayTimeout = null;

const nextSlide = () => {
	currentIndex.value = (currentIndex.value + 1) % images.length;
};

const prevSlide = () => {
	currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
};

const manualNextSlide = () => {
	clearInterval(autoplayInterval);
	clearTimeout(autoplayTimeout);
	nextSlide();
	autoplayTimeout = setTimeout(startAutoplay, 5000);
};

const manualPrevSlide = () => {
	clearInterval(autoplayInterval);
	clearTimeout(autoplayTimeout);
	prevSlide();
	autoplayTimeout = setTimeout(startAutoplay, 5000);
};

const startAutoplay = () => {
	clearInterval(autoplayInterval);
	clearTimeout(autoplayTimeout);
	autoplayInterval = setInterval(nextSlide, 5000);
};

const pauseAutoplay = () => {
	clearInterval(autoplayInterval);
	clearTimeout(autoplayTimeout);
};

const resumeAutoplay = () => {
	startAutoplay();
};

const openLightbox = (index) => {
	currentLightboxIndex.value = index;
	lightboxOpen.value = true;
	pauseAutoplay();
};

const closeLightbox = () => {
	lightboxOpen.value = false;
	resumeAutoplay();
};

const nextLightboxImage = () => {
	currentLightboxIndex.value = (currentLightboxIndex.value + 1) % images.length;
};

const prevLightboxImage = () => {
	currentLightboxIndex.value =
		(currentLightboxIndex.value - 1 + images.length) % images.length;
};

onMounted(() => {
	startAutoplay();
});

onUnmounted(() => {
	pauseAutoplay();
});
</script>

<style scoped>
.carousel-container {
	position: relative;
	width: 55%;
	margin: 0 auto;
	overflow: hidden;
	border-radius: 12px;
}

.carousel-track {
	display: flex;
	transition: transform 0.5s ease;
}

.carousel-slide {
	flex: 0 0 100%;
	width: 100%;
}

.carousel-slide img {
	width: 100%;
	height: auto;
	aspect-ratio: 1/1;
	object-fit: cover;
}

.nav-button {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	background: rgba(255, 255, 255, 0.7);
	border: none;
	border-radius: 50%;
	width: 40px;
	height: 40px;
	cursor: pointer;
	z-index: 2;
}

.prev {
	left: 10px;
}

.next {
	right: 10px;
}

.lightbox {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.9);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1000;
}

.lightbox img {
	max-width: 90%;
	max-height: 90vh;
	object-fit: contain;
}

.close-lightbox {
	position: absolute;
	top: 20px;
	right: 20px;
	background: white;
	border: none;
	border-radius: 50%;
	width: 40px;
	height: 40px;
	font-size: 24px;
	cursor: pointer;
}
</style>
