<script>
export default {
	components: {},
};
</script>

<template>
	<div class="container">
		<!-- Top Section -->
		<div class="top flex items-center">
			<div class="left flex flex-col items-start justify-center h-full w-1/2">
				<div class="w-full">
					<h2 class="text-4xl font-bold">
						Contenuti di viaggio e avventura che ispirano e restano impressi
					</h2>
					<p class="text-xl py-3">
						Dai nuova vita al tuo prodotto o brand in location straordinarie in
						tutto il <span class="font-bold">mondo</span>.
					</p>
					<span class="font-bold cta-btn"
						><a href="">
							Esplora il portfolio
							<i class="fas fa-arrow-right p-2 rounded-full"></i></a
					></span>
				</div>
			</div>

			<div class="right flex flex-col items-end justify-end h-full w-1/2">
				<div class="images-layout">
					<img src="../assets/images/decoration/list-one/iceland2.JPG" alt="" />
					<img src="../assets/images/decoration/list-one/bosnia.jpg" alt="" />
					<img src="../assets/images/decoration/list-one/iceland.JPG" alt="" />
					<img src="../assets/images/decoration/list-one/norway.jpg" alt="" />
					<img src="../assets/images/decoration/list-one/spain.jpg" alt="" />
					<img src="../assets/images/decoration/list-one/norway2.jpg" alt="" />
					<img src="../assets/images/decoration/list-one/turkey.jpg" alt="" />
				</div>
			</div>
		</div>

		<!-- Bottom Section -->
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
						Scatti di prodotto pensati per raccontare la mission del tuo brand
					</h2>
					<p class="text-xl py-3">
						Colloca il tuo prodotto in un ambiente unico che lo valorizzi.
					</p>
					<span class="font-bold cta-btn"
						><a href="">
							Esplora il portfolio
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

/* Image Wall nella sezione sinistra */
.image-wall {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 25px;
	width: 80%;
}

.card-wall {
	width: 100%;
	aspect-ratio: 1/1;
	border-radius: 12px;
	box-shadow: rgba(0, 0, 0, 0.1) 2px 4px 8px;
	background-color: #ddd;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 12px;
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
</style>
