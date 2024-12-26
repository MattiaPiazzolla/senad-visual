<script>
export default {};
</script>
<template>
	<div class="container">
		<div class="content">
			<div class="w-full top text-center">
				<h2 class="text-4xl font-bold">Tu Sei la Missione</h2>
				<p class="text-xl py-3">
					Con sempre più brand, aziende e prodotti che entrano nel mondo dei
					social e competono per l’attenzione dei clienti, i due aspetti che ti
					distingueranno sono la qualità e la storia. Il mio obiettivo
					principale non è solo creare contenuti della massima qualità per il
					tuo brand, ma anche raccontare una storia coinvolgente che risuoni con
					i tuoi clienti.
				</p>
				<span class="font-bold cta-btn"
					><a href="">
						Ecco alcuni clienti
						<i class="fas fa-arrow-right p-2 rounded-full"></i></a
				></span>
				<div class="w-2/3 bottom">
					<div
						class="carousel-container right flex flex-col items-start justify-center h-full w-full">
						<div class="carousel">
							<div class="group">
								<div class="card">
									<img src="../assets/images/brands/Heys-Logo.jpg" alt="" />
								</div>
								<div class="card">
									<img
										src="../assets/images/brands/logo-primary-black.png"
										alt="" />
								</div>
								<div class="card">
									<img src="../assets/images/brands/logoZero.jpg" alt="" />
								</div>
								<div class="card">
									<img
										src="../assets/images/brands/omnicharge_Logo.jpg"
										class="specialImg"
										alt="" />
								</div>
								<div class="card">
									<img src="../assets/images/brands/tourit-logo.jpeg" alt="" />
								</div>
							</div>
							<!-- Add `aria-hidden` to hide the duplicated cards from screen readers. -->
							<div aria-hidden class="group">
								<div class="card">
									<img src="../assets/images/brands/Heys-Logo.jpg" alt="" />
								</div>
								<div class="card">
									<img
										src="../assets/images/brands/logo-primary-black.png"
										alt="" />
								</div>
								<div class="card">
									<img src="../assets/images/brands/logoZero.jpg" alt="" />
								</div>
								<div class="card">
									<img
										src="../assets/images/brands/omnicharge_Logo.jpg"
										class="specialImg"
										alt="" />
								</div>
								<div class="card">
									<img src="../assets/images/brands/tourit-logo.jpeg" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.content {
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.top {
	height: 50vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
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
	height: 25vh;
	display: flex;
	justify-content: center;
	background-color: transparent;
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
	background-color: transparent;
	padding: 25px 0;
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
	will-change: transform;
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

.card {
	width: 100%;
	aspect-ratio: 1 / 1;
	color: black;
	border-radius: 24px;
	box-shadow: rgba(0, 0, 0, 10%) 5px 5px 20px 0;
	font-size: xx-large;
	justify-content: center;
	align-items: center;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 24px;
	}
	.specialImg {
		width: 100%;
		height: 100%;
		object-fit: contain;
		border-radius: 24px;
	}
}
</style>
