<script>
import { ref, watch } from "vue";
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from "lucide-vue-next";

export default {
	components: {
		ChevronLeftIcon,
		ChevronRightIcon,
		XIcon,
	},
	setup() {
		const currentIndex = ref(0);
		const images = ref([
			"../../public/list-one/bosnia.jpg",
			"../../public/list-one/iceland.JPG",
			"../../public/list-one/jordan.jpg",
			"../../public/list-one/norway.jpg",
			"../../public/list-one/spain.jpg",
			"../../public/list-one/iceland2.JPG",
			"../../public/list-one/turkey.jpg",
			"../../public/list-one/norway2.jpg",
		]);
		const isModalOpen = ref(false);
		const modalImage = ref("");
		const modalIndex = ref(0);
		const touchStartX = ref(0);
		const touchEndX = ref(0);

		const nextSlide = () => {
			currentIndex.value = (currentIndex.value + 1) % images.value.length;
		};

		const prevSlide = () => {
			currentIndex.value =
				(currentIndex.value - 1 + images.value.length) % images.value.length;
		};

		const setCurrentSlide = (index) => {
			currentIndex.value = index;
		};

		const openModal = (index) => {
			modalIndex.value = index;
			modalImage.value = images.value[index];
			isModalOpen.value = true;
			document.body.style.overflow = "hidden";
			window.addEventListener("keydown", handleKeyDown);
		};

		const closeModal = () => {
			isModalOpen.value = false;
			document.body.style.overflow = "";
			window.removeEventListener("keydown", handleKeyDown);
		};

		const prevModalImage = () => {
			modalIndex.value =
				(modalIndex.value - 1 + images.value.length) % images.value.length;
			modalImage.value = images.value[modalIndex.value];
		};

		const nextModalImage = () => {
			modalIndex.value = (modalIndex.value + 1) % images.value.length;
			modalImage.value = images.value[modalIndex.value];
		};

		const handleKeyDown = (event) => {
			if (event.key === "ArrowLeft") {
				isModalOpen.value ? prevModalImage() : prevSlide();
			} else if (event.key === "ArrowRight") {
				isModalOpen.value ? nextModalImage() : nextSlide();
			} else if (event.key === "Escape") {
				closeModal();
			}
		};

		const touchStart = (event) => {
			touchStartX.value = event.touches[0].clientX;
		};

		const touchMove = (event) => {
			touchEndX.value = event.touches[0].clientX;
		};

		const touchEnd = () => {
			if (touchStartX.value - touchEndX.value > 50) {
				nextSlide();
			} else if (touchEndX.value - touchStartX.value > 50) {
				prevSlide();
			}
		};

		watch(currentIndex, (newIndex) => {
			if (isModalOpen.value) {
				modalIndex.value = newIndex;
				modalImage.value = images.value[newIndex];
			}
		});

		return {
			currentIndex,
			images,
			isModalOpen,
			modalImage,
			modalIndex,
			nextSlide,
			prevSlide,
			setCurrentSlide,
			openModal,
			closeModal,
			prevModalImage,
			nextModalImage,
			touchStart,
			touchMove,
			touchEnd,
		};
	},
};
</script>

<template>
	<div
		class="relative carousel-wrapper max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg"
		@touchstart="touchStart"
		@touchmove="touchMove"
		@touchend="touchEnd">
		<div class="relative h-64 md:h-96">
			<!-- Image Slides -->
			<div
				v-for="(image, index) in images"
				:key="index"
				:class="`absolute slide-container transition-opacity duration-500 ease-in-out ${
					index === currentIndex ? 'opacity-100' : 'opacity-0'
				}`"
				@click="openModal(currentIndex)">
				<img
					:src="image"
					:alt="`Slide ${index + 1}`"
					class="w-full h-full object-cover cursor-pointer"
					loading="lazy" />
			</div>
		</div>

		<!-- Progress Bar -->
		<div class="absolute top-0 left-0 w-full h-1 bg-white/20">
			<div
				class="h-full progress-bar transition-all duration-300 ease-in-out"
				:style="{
					width: `${((currentIndex + 1) / images.length) * 100}%`,
				}"></div>
		</div>

		<!-- Previous Button -->
		<button
			@click.stop="prevSlide"
			class="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors backdrop-blur-sm"
			aria-label="Previous slide">
			<ChevronLeftIcon class="w-6 h-6" />
		</button>

		<!-- Next Button -->
		<button
			@click.stop="nextSlide"
			class="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors backdrop-blur-sm"
			aria-label="Next slide">
			<ChevronRightIcon class="w-6 h-6" />
		</button>

		<!-- Dots Navigation -->
		<div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
			<button
				v-for="(_, index) in images"
				:key="index"
				@click.stop="setCurrentSlide(index)"
				:class="`w-3 h-3 rounded-full transition-all duration-300 ${
					index === currentIndex
						? 'bg-white scale-125'
						: 'bg-white/50 hover:bg-white/75'
				}`"
				:aria-label="`Go to slide ${index + 1}`" />
		</div>

		<!-- Full-Screen Modal -->
		<Teleport to="body">
			<div
				v-if="isModalOpen"
				class="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50"
				@click="closeModal">
				<!-- Controllers in Full Screen -->
				<button
					@click.stop="prevModalImage"
					class="absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 text-white hover:bg-white/30 transition-colors backdrop-blur-sm"
					aria-label="Previous image">
					<ChevronLeftIcon class="w-8 h-8" />
				</button>
				<button
					@click.stop="nextModalImage"
					class="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 text-white hover:bg-white/30 transition-colors backdrop-blur-sm"
					aria-label="Next image">
					<ChevronRightIcon class="w-8 h-8" />
				</button>

				<img
					:src="modalImage"
					:alt="`Full Screen Image ${modalIndex + 1}`"
					class="max-w-full max-h-full object-contain"
					@click.stop />

				<!-- Close button -->
				<button
					@click="closeModal"
					class="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/30 transition-colors backdrop-blur-sm"
					aria-label="Close full-screen view">
					<XIcon class="w-6 h-6" />
				</button>
			</div>
		</Teleport>
	</div>
</template>

<style lang="scss" scoped>
.progress-bar {
	background-color: rgb(116, 0, 200);
}

.carousel-wrapper {
	height: 100%;
	aspect-ratio: 1/1;

	.slide-container {
		width: 100%;
		aspect-ratio: 1/1;

		img {
			object-fit: cover;
			width: 100%;
			height: 100%;
		}
	}
}

.backdrop-blur-sm {
	backdrop-filter: blur(4px);
}

.scale-125 {
	transform: scale(1.25);
}

.fixed {
	transition: opacity 0.3s ease-in-out;
}

@media (max-width: 640px) {
	.carousel-wrapper {
		aspect-ratio: 4/3;
	}
}

/* Improve accessibility */
@media (prefers-reduced-motion: reduce) {
	.transition-all,
	.transition-opacity,
	.transition-colors {
		transition: none;
	}
}
</style>
