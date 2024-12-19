<script>
export default {};
</script>
<template>
	<div class="container">
		<div class="top flex items-center">
			<div class="left flex flex-col items-start justify-center h-full w-1/2">
				<div class="w-full">
					<h2 class="text-4xl font-bold">Tu Sei la Missione</h2>
					<p class="text-xl py-3">
						Con sempre più brand, aziende e prodotti che entrano nel mondo dei
						social e competono per l’attenzione dei clienti, i due aspetti che
						ti distingueranno sono la qualità e la storia. Il mio obiettivo
						principale non è solo creare contenuti della massima qualità per il
						tuo brand, ma anche raccontare una storia coinvolgente che risuoni
						con i tuoi clienti.
					</p>
					<span class="font-bold cta-btn"
						><a href="">
							Ecco alcuni clienti
							<i class="fas fa-arrow-right p-2 rounded-full"></i></a
					></span>
				</div>
			</div>
			<div
				class="carousel-container right flex flex-col items-start justify-center h-full w-1/2">
				<div class="carousel">
					<div class="group">
						<div class="card">
							<img src="../assets/images/brands/omni2.JPG" alt="" />
						</div>
						<div class="card">
							<img src="../assets/images/brands/bag2.jpg" alt="" />
						</div>
						<div class="card">
							<img src="../assets/images/brands//valigie4.JPG" alt="" />
						</div>
						<div class="card">
							<img src="../assets/images/brands/xr1.jpg" alt="" />
						</div>
					</div>
					<!-- Add `aria-hidden` to hide the duplicated cards from screen readers. -->
					<div aria-hidden class="group">
						<div class="card">
							<img src="../assets/images/brands/omni2.JPG" alt="" />
						</div>
						<div class="card">
							<img src="../assets/images/brands/bag2.jpg" alt="" />
						</div>
						<div class="card">
							<img src="../assets/images/brands//valigie4.JPG" alt="" />
						</div>
						<div class="card">
							<img src="../assets/images/brands/xr1.jpg" alt="" />
						</div>
					</div>
				</div>

				<div class="carousel">
					<div class="group-two">
						<div class="card">
							<img src="../assets/images/brands/omni1.JPG" alt="" />
						</div>
						<div class="card">
							<img src="../assets/images/brands/bag4.jpg" alt="" />
						</div>
						<div class="card">
							<img src="../assets/images/brands/xr2.jpg" alt="" />
						</div>
						<div class="card">
							<img src="../assets/images/brands/valigie 3.JPG" alt="" />
						</div>
					</div>
					<!-- Add `aria-hidden` to hide the duplicated cards from screen readers. -->
					<div aria-hidden class="group-two">
						<div class="card">
							<img src="../assets/images/brands/omni1.JPG" alt="" />
						</div>
						<div class="card">
							<img src="../assets/images/brands/bag4.jpg" alt="" />
						</div>
						<div class="card">
							<img src="../assets/images/brands/xr2.jpg" alt="" />
						</div>
						<div class="card">
							<img src="../assets/images/brands/valigie 3.JPG" alt="" />
						</div>
					</div>
				</div>
				<div class="carousel">
					<div class="group-three">
						<div class="card">
							<img src="../assets/images/brands/omni3.JPG" alt="" />
						</div>
						<div class="card">
							<img src="../assets/images/brands/xr4.jpg" alt="" />
						</div>
						<div class="card">
							<img src="../assets/images/brands/bag1.jpg" alt="" />
						</div>
						<div class="card">
							<img src="../assets/images/brands/valigie4.JPG" alt="" />
						</div>
					</div>
					<!-- Add `aria-hidden` to hide the duplicated cards from screen readers. -->
					<div aria-hidden class="group-three">
						<div class="card">
							<img src="../assets/images/brands/omni3.JPG" alt="" />
						</div>
						<div class="card">
							<img src="../assets/images/brands/xr4.jpg" alt="" />
						</div>
						<div class="card">
							<img src="../assets/images/brands/bag1.jpg" alt="" />
						</div>
						<div class="card">
							<img src="../assets/images/brands/valigie4.JPG" alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="bottom flex items-center">
			<div class="left flex flex-col items-start justify-center h-full w-1/2">
				<div class="image-wall">
					<div class="card-wall" style="background-color: #f8b400"></div>
					<div class="card-wall" style="background-color: #1e90ff"></div>
					<div class="card-wall" style="background-color: #ff6347"></div>
					<div class="card-wall" style="background-color: #2ecc71"></div>
					<div class="card-wall" style="background-color: #9b59b6"></div>
					<div class="card-wall" style="background-color: #e74c3c"></div>
				</div>
			</div>
			<div class="right flex flex-col items-start justify-center h-full w-1/2">
				<div
					class="flex flex-col items-end justify-center h-full w-full text-end">
					<h2 class="text-4xl font-bold">
						Offri ai tuoi clienti la loro prossima avventura.
					</h2>
					<p class="text-xl py-3">
						Servizi <span class="font-bold">Video</span> e
						<span class="font-bold">Foto</span> professionali per individui e
						per brand in tutto il mondo.
					</p>
					<span class="font-bold cta-btn"
						><a href="">
							Scopri il portfolio
							<i class="fas fa-arrow-right p-2 rounded-full"></i></a
					></span>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.top {
	height: 50vh;
}
.bottom {
	height: 50vh;
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
		//transform: scale(1.05);
		a {
			color: rgb(116, 0, 200);
		}
		.fa-arrow-right {
			animation: blinkRight 1s ease-in-out infinite;
		}
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

/* Carousel con overlay */
.carousel-container {
	position: relative;
	height: 27.5vh;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden; /* Nasconde le card fuori dai bordi */
}

/* Overlay con gradiente */
.carousel-container::before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	pointer-events: none;
	background: linear-gradient(
		to right,
		white 0%,
		/* Bianco ai bordi sinistro */ transparent 30%,
		/* Sfuma verso trasparente */ transparent 70%,
		/* Centro trasparente */ white 100% /* Bianco ai bordi destro */
	);
	z-index: 10; /* Assicurati che il gradiente sia sopra il carosello */
}

//Carousel brands
.carousel {
	margin: 0 auto;
	padding: 10px 0;
	width: 100%;
	overflow: hidden;
	display: flex;
	> * {
		flex: 0 0 100%;
	}
}

.group {
	display: flex;
	gap: 20px;
	/* Add padding to the right to create a gap between the last and first card. */
	padding-right: 20px;
	will-change: transform; /* We should be nice to the browser - let it know what we're going to animate. */
	animation: scrolling 14.5s linear infinite;
}
@keyframes scrolling {
	0% {
		transform: translateX(0%);
	}
	100% {
		transform: translateX(-100%);
	}
}
.group-two {
	display: flex;
	gap: 20px;
	/* Add padding to the right to create a gap between the last and first card. */
	padding-right: 20px;
	will-change: transform; /* We should be nice to the browser - let it know what we're going to animate. */
	animation: scrollingtwo 15s linear infinite;
}
@keyframes scrollingtwo {
	0% {
		transform: translateX(-100%);
	}
	100% {
		transform: translateX(0%);
	}
}

.group-three {
	display: flex;
	gap: 20px;
	/* Add padding to the right to create a gap between the last and first card. */
	padding-right: 20px;
	will-change: transform; /* We should be nice to the browser - let it know what we're going to animate. */
	animation: scrollingthree 16s linear infinite;
}
@keyframes scrollingthree {
	0% {
		transform: translateX(0%);
	}
	100% {
		transform: translateX(-100%);
	}
}

.card {
	width: 100%;
	aspect-ratio: 1 / 1;
	color: black;
	border-radius: 24px;
	box-shadow: rgba(0, 0, 0, 10%) 5px 5px 20px 0;
	font-size: xx-large;
	justify-content: center;
	align-items: center;
	min-height: 50px;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 24px;
	}
}
/* Image Wall nella sezione sinistra */
.image-wall {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 5px;
	width: 75%;
}

.card-wall {
	width: 100%;
	padding-top: 100%; /* Mantiene il rapporto 1:1 */
	border-radius: 12px;
	box-shadow: rgba(0, 0, 0, 0.1) 2px 4px 8px;
	background-color: #ddd;
}
</style>
