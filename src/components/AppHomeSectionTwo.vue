<template>
	<div class="container">
		<!-- Top Section -->
		<div class="top flex items-center">
			<div class="left flex flex-col items-start justify-center w-1/2">
				<div class="w-full transition-all duration-500">
					<h2 class="text-4xl font-bold mb-4 animate-fadeInUp">
						Contenuti di viaggio e avventura che ispirano e restano impressi
					</h2>
					<p class="text-xl py-3 animate-fadeInUp delay-300">
						Dai nuova vita al tuo prodotto o brand in location straordinarie in
						tutto il
						<span class="font-bold">mondo</span>.
					</p>
					<span
						class="font-bold cta-btn"
						@mouseover="animateCTA"
						@mouseleave="resetCTA">
						<a href="">
							Esplora il portfolio
							<i class="fas fa-arrow-right p-2 rounded-full" ref="arrow"></i>
						</a>
					</span>
				</div>
			</div>

			<div
				class="right flex flex-col items-center justify-center w-1/2 img-carousel-container">
				<div class="overflow-scroll">
					<AppCarousel @animate-card="animateCard" />
				</div>
			</div>
		</div>

		<!-- Bottom Section -->
		<div class="bottom flex items-center">
			<div class="left flex flex-col items-start justify-center h-full w-1/2">
				<div class="image-wall">
					<div
						v-for="(product, index) in products"
						:key="index"
						class="card-wall cursor-pointer"
						@click="openLightbox(index)"
						@mouseover="onCardHover(index)"
						@mouseleave="onCardLeave(index)">
						<div class="card-content">
							<img :src="product" :alt="'Product image ' + (index + 1)" />
						</div>
					</div>
				</div>
			</div>
			<div class="right flex flex-col items-start justify-center h-full w-1/2">
				<div
					class="flex flex-col items-end justify-center h-full w-full text-end transition-all duration-500">
					<h2 class="text-4xl font-bold mb-4 animate-fadeInUp">
						Scatti di prodotto pensati per raccontare la mission del tuo brand
					</h2>
					<p class="text-xl py-3 animate-fadeInUp delay-300">
						Colloca il tuo prodotto in un ambiente unico che lo valorizzi.
					</p>
					<span
						class="font-bold cta-btn"
						@mouseover="animateCTA"
						@mouseleave="resetCTA">
						<a href="">
							Esplora il portfolio
							<i class="fas fa-arrow-right p-2 rounded-full" ref="arrow"></i>
						</a>
					</span>
				</div>
			</div>
		</div>

		<!-- Lightbox Component -->
		<div
			v-if="isLightboxOpen"
			class="lightbox-overlay fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
			@click="closeLightbox">
			<!-- Image container -->
			<div class="relative w-full h-full flex items-center justify-center p-4">
				<img
					:src="currentImage"
					:alt="'Image ' + (currentImageIndex + 1)"
					class="max-h-full max-w-full object-contain cursor-zoom-in transform transition-transform duration-300 hover:scale-105"
					@click.stop />

				<!-- Previous button -->
				<button
					v-if="products.length > 1"
					@click.stop="previousImage"
					class="nav-button left-4 hover:bg-white hover:text-black"
					aria-label="Previous image">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-8 w-8"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 19l-7-7 7-7" />
					</svg>
				</button>

				<!-- Next button -->
				<button
					v-if="products.length > 1"
					@click.stop="nextImage"
					class="nav-button right-4 hover:bg-white hover:text-black"
					aria-label="Next image">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-8 w-8"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 5l7 7-7 7" />
					</svg>
				</button>

				<!-- Close button -->
				<button
					@click.stop="closeLightbox"
					class="absolute top-4 right-4 text-white hover:bg-white hover:text-black rounded-full p-2 transition-all duration-300"
					aria-label="Close lightbox">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-8 w-8"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>

				<!-- Image counter -->
				<div
					class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 px-4 py-2 rounded-full text-white text-sm">
					{{ currentImageIndex + 1 }} / {{ products.length }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import AppCarousel from "./AppCarousel.vue";

export default {
	components: {
		AppCarousel,
	},
	data() {
		return {
			products: [
				"../../public/products/bag1.jpg",
				"../../public/products/valigie 3.JPG",
				"../../public/products/omni1.JPG",
				"../../public/products/valigie4.JPG",
				"../../public/products/bag3.jpg",
				"../../public/products/omni4.JPG",
			],
			cardScales: [1, 1, 1, 1, 1, 1],
			isLightboxOpen: false,
			currentImageIndex: 0,
		};
	},
	computed: {
		currentImage() {
			return this.products[this.currentImageIndex];
		},
	},
	methods: {
		animateCTA() {
			this.$refs.arrow.style.animation = "pulse 1s ease-in-out infinite";
		},
		resetCTA() {
			this.$refs.arrow.style.animation = "none";
		},
		animateCard(cardIndex) {
			const cards = document.querySelectorAll(".card-wall");
			cards.forEach((card, index) => {
				if (index === cardIndex) {
					card.style.transform = "scale(1.1) rotate(5deg)";
					card.style.transition = "transform 0.3s ease-out";
				} else {
					card.style.transform = "scale(0.95)";
				}
			});
		},
		onCardHover(index) {
			this.cardScales[index] = 1.1;
		},
		onCardLeave(index) {
			this.cardScales[index] = 1;
		},
		// Lightbox methods
		openLightbox(index) {
			this.currentImageIndex = index;
			this.isLightboxOpen = true;
			document.addEventListener("keydown", this.handleKeydown);
		},
		closeLightbox() {
			this.isLightboxOpen = false;
			document.removeEventListener("keydown", this.handleKeydown);
		},
		nextImage() {
			this.currentImageIndex =
				(this.currentImageIndex + 1) % this.products.length;
		},
		previousImage() {
			this.currentImageIndex =
				(this.currentImageIndex - 1 + this.products.length) %
				this.products.length;
		},
		handleKeydown(e) {
			if (!this.isLightboxOpen) return;

			switch (e.key) {
				case "Escape":
					this.closeLightbox();
					break;
				case "ArrowRight":
					this.nextImage();
					break;
				case "ArrowLeft":
					this.previousImage();
					break;
				case " ": // Space key
					e.preventDefault();
					this.nextImage();
					break;
			}
		},

		// Enhanced navigation methods
		nextImage() {
			this.currentImageIndex =
				(this.currentImageIndex + 1) % this.products.length;
			this.animateImageTransition("next");
		},

		previousImage() {
			this.currentImageIndex =
				(this.currentImageIndex - 1 + this.products.length) %
				this.products.length;
			this.animateImageTransition("prev");
		},

		animateImageTransition(direction) {
			const img = document.querySelector(".lightbox-overlay img");
			if (!img) return;

			img.style.opacity = "0";
			img.style.transform = `translateX(${
				direction === "next" ? "-20px" : "20px"
			})`;

			setTimeout(() => {
				img.style.opacity = "1";
				img.style.transform = "translateX(0)";
			}, 50);
		},
	},
};
</script>

<style lang="scss" scoped>
.container {
	height: 100vh;
}

.top,
.bottom {
	height: 50vh;
}

.img-carousel-container {
	position: relative;
}

.cta-btn {
	transition: all 0.5s ease-in-out;
	border-radius: 15px;
	position: relative;

	&::after {
		content: "";
		position: absolute;
		left: 0;
		bottom: -5px;
		width: 10%;
		height: 2px;
		background-color: rgb(116, 0, 200);
		transition: width 0.5s ease;
	}
	&:hover::after {
		width: 100%;
	}

	.fa-arrow-right {
		color: rgb(116, 0, 200);
		transition: all 0.3s ease-in-out;
	}

	&:hover {
		a {
			color: rgb(116, 0, 200);
		}
		.fa-arrow-right {
			animation: blinkRight 1s ease-in-out infinite;
		}
	}
}

.lightbox-overlay {
	animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

@keyframes blinkRight {
	0% {
		transform: translateX(0);
	}
	50% {
		transform: translateX(5px);
	}
	100% {
		transform: translateX(0);
	}
}

@keyframes pulse {
	0% {
		transform: scale(1);
	}
	50% {
		transform: scale(1.2) rotate(15deg);
	}
	100% {
		transform: scale(1);
	}
}

@keyframes fadeInUp {
	from {
		opacity: 0;
		transform: translateY(20px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

.animate-fadeInUp {
	animation: fadeInUp 1s ease-out;
}

.delay-300 {
	animation-delay: 0.3s;
}

.image-wall {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 20px;
	width: 80%;
	margin: 0 auto;
}

.card-wall {
	width: 100%;
	aspect-ratio: 1/1;
	border-radius: 15px;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
	transition: transform 0.3s ease, box-shadow 0.3s ease;
	overflow: hidden;
	transform: v-bind("`scale(${cardScales[index]})`");

	&:hover {
		box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
	}

	.card-content {
		position: relative;
		height: 100%;
		width: 100%;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center;
		}
	}
}

.images-layout {
	columns: 200px;
	width: 90%;
	overflow-y: scroll;
	img {
		width: 100%;
		margin-bottom: 1em;
	}
}

/* Lightbox specific styles */
.lightbox-overlay {
	animation: fadeIn 0.3s ease-in-out;

	.nav-button {
		@apply absolute text-white p-2 rounded-full transition-all duration-300 z-50;
		background: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(4px);

		&:hover {
			transform: scale(1.1);
		}

		&:active {
			transform: scale(0.95);
		}
	}

	img {
		user-select: none;
		-webkit-user-drag: none;
	}

	button {
		opacity: 0.7;
		transition: all 0.3s ease;

		&:hover {
			opacity: 1;
			transform: scale(1.1);
		}
	}
}

@keyframes fadeIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
</style>
