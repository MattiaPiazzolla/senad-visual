<script>
export default {};
</script>
<template>
	<div class="container-full">
		<div class="jumbo-section">
			<div
				class="container flex flex-col items-start justify-center h-full w-full">
				<div class="text-white ps-4">
					<h2 class="text-4xl font-bold w-2/3">
						Offri ai tuoi clienti la loro prossima avventura.
					</h2>
					<p class="text-xl w-2/3 py-3">
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
.container-full {
	@apply w-full;
	.jumbo-section {
		background-image: linear-gradient(
				to bottom,
				white 15%,
				rgba(0, 0, 0, 0.25) 50%
			),
			url("../assets/images/decoration/jumbo-bg.JPG");
		background-size: cover;
		background-position: center;
		height: 100vh;
		position: relative;

		.text-white {
			line-height: 4.25;
			animation: fadeIn 1.75s ease-in-out, fromBottom 1.25s ease-in-out;
			animation-fill-mode: both;
		}
	}
	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@keyframes fromBottom {
		0% {
			transform: translateY(75px);
		}
		100% {
			transform: translateY(0);
		}
	}
}

.cta-btn {
	a {
		color: white;
		padding: 0px;
		border-radius: 15px;
		transition: all 0.5s ease-in-out;
	}
	.fa-arrow-right {
		background: rgb(116, 0, 200);
		transition: all 0.5s ease-in-out;
	}

	&:hover {
		a {
			background: rgb(116, 0, 200);
			padding: 10px;
		}
		.fa-arrow-right {
			background: white;
			color: rgb(116, 0, 200);
			animation: blinkRight 1.25s ease-in-out infinite;
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
</style>
