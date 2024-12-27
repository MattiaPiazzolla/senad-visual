<script>
export default {
	data() {
		return {
			currentIndex: 0,
			images: [
				"../../public/list-one/bosnia.jpg",
				"../../public/list-one/iceland.JPG",
				"../../public/list-one/jordan.jpg",
				"../../public/list-one/norway.jpg",
				"../../public/list-one/spain.jpg",
				"../../public/list-one/iceland2.JPG",
				"../../public/list-one/turkey.jpg",
				"../../public/list-one/norway2.jpg",
			],
			isModalOpen: false,
			modalImage: "",
			modalIndex: 0,
		};
	},
	methods: {
		nextSlide() {
			this.currentIndex =
				this.currentIndex === this.images.length - 1
					? 0
					: this.currentIndex + 1;
		},
		prevSlide() {
			this.currentIndex =
				this.currentIndex === 0
					? this.images.length - 1
					: this.currentIndex - 1;
		},
		setCurrentSlide(index) {
			this.currentIndex = index;
		},
		openModal(index) {
			this.modalIndex = index;
			this.modalImage = this.images[index];
			this.isModalOpen = true;
			window.addEventListener("keydown", this.handleKeyDown);
		},
		closeModal() {
			this.isModalOpen = false;
			window.removeEventListener("keydown", this.handleKeyDown);
		},
		prevModalImage() {
			this.modalIndex =
				this.modalIndex === 0 ? this.images.length - 1 : this.modalIndex - 1;
			this.modalImage = this.images[this.modalIndex];
		},
		nextModalImage() {
			this.modalIndex =
				this.modalIndex === this.images.length - 1 ? 0 : this.modalIndex + 1;
			this.modalImage = this.images[this.modalIndex];
		},
		handleKeyDown(event) {
			if (event.key === "ArrowLeft") {
				this.prevModalImage();
			} else if (event.key === "ArrowRight") {
				this.nextModalImage();
			} else if (event.key === "Escape") {
				this.closeModal();
			}
		},
	},
	watch: {
		currentIndex(newIndex) {
			// Update modal index and image when carousel changes
			if (this.isModalOpen) {
				this.modalIndex = newIndex;
				this.modalImage = this.images[newIndex];
			}
		},
	},
};
</script>
<template>
	<div
		class="relative carousel-wrapper max-w-4xl mx-auto overflow-hidden rounded-lg">
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
					class="w-full h-full object-cover cursor-pointer" />
			</div>
		</div>

		<!-- Previous Button -->
		<button
			@click.stop="prevSlide"
			class="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors">
			<span>&lt;</span>
		</button>

		<!-- Next Button -->
		<button
			@click.stop="nextSlide"
			class="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors">
			<span>&gt;</span>
		</button>

		<!-- Dots Navigation -->
		<div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
			<button
				v-for="(_, index) in images"
				:key="index"
				@click.stop="setCurrentSlide(index)"
				:class="`w-2 h-2 rounded-full transition-colors ${
					index === currentIndex ? 'bg-white' : 'bg-white/50'
				}`" />
		</div>

		<!-- Full-Screen Modal -->
		<div
			v-if="isModalOpen"
			class="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
			@click="closeModal">
			<!-- Controllers in Full Screen -->
			<button
				@click.stop="prevModalImage"
				class="absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors">
				&lt;
			</button>
			<button
				@click.stop="nextModalImage"
				class="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors">
				&gt;
			</button>

			<img
				:src="modalImage"
				alt="Full Screen Image"
				class="max-w-full max-h-full"
				@click.stop />
		</div>
	</div>
</template>

<style lang="scss" scoped>
/* Style for carousel */
.relative {
	position: relative;
}

.overflow-hidden {
	overflow: hidden;
}

.absolute {
	position: absolute;
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

.w-full {
	width: 100%;
}

.h-full {
	height: 100%;
}

.transition-opacity {
	transition: opacity 0.5s ease-in-out;
}

.opacity-100 {
	opacity: 1;
}

.opacity-0 {
	opacity: 0;
}

.bg-black\/50 {
	background-color: rgba(0, 0, 0, 0.5);
}

.bg-black\/75 {
	background-color: rgba(0, 0, 0, 0.75);
}

.text-white {
	color: white;
}

.rounded-full {
	border-radius: 9999px;
}

.transition-colors {
	transition: background-color 0.3s ease-in-out;
}

.hover\:bg-black\/75:hover {
	background-color: rgba(0, 0, 0, 0.75);
}

.w-2 {
	width: 0.5rem;
}

.h-2 {
	height: 0.5rem;
}

.bg-white {
	background-color: white;
}

.bg-white\/50 {
	background-color: rgba(255, 255, 255, 0.5);
}

.flex {
	display: flex;
}

.space-x-2 > :not(:last-child) {
	margin-right: 0.5rem;
}

.cursor-pointer {
	cursor: pointer;
}

.fixed {
	position: fixed;
}

.bg-opacity-75 {
	background-color: rgba(0, 0, 0, 0.75);
}

.max-w-full {
	max-width: 100%;
}

.max-h-full {
	max-height: 100%;
}

.p-4 {
	padding: 1rem;
}
</style>
