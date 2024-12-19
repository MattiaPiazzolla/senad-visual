<script>
export default {};
</script>

<template>
	<footer class="footer-hover">
		<div class="bg-white mx-auto glass-hover">
			<i class="fas fa-angle-up"></i>
			<div class="disapearing-footer">
				<div class="container w-full flex justify-between">
					<div class="w-2/6 text-start p-3">
						<h3 class="font-bold">I miei servizi</h3>
						<a href="#"><p>Travel</p></a>
						<a href="#"><p>Wedding</p></a>
						<a href="#"><p>Brands</p></a>
						<a href="#"><p>Events</p></a>
					</div>
					<div class="w-1/3 text-start p-3">
						<h3 class="font-bold">Senad Dziho</h3>
						<p class="text-black">
							Attualmente in Italia 🇮🇹 Disponibile a lavorare in tutto il mondo
							🌍
						</p>
						<p>Senad@mail.com</p>
						<p>+39 123 456 789 <i class="fab fa-whatsapp"></i></p>
					</div>
					<div class="w-2/6 text-center p-3 flex flex-col items-center">
						<h3 class="font-bold">Social</h3>
						<a href="#"><i class="fa-brands fa-instagram"></i> Instagram</a>
						<br />
						<a href="#"><i class="fa-brands fa-facebook"></i> Facebook</a>
					</div>
				</div>
				<div class="footer-copyright">
					<p class="m-0">Copyright © 2025 Senad Dziho.</p>
					<p><a href="#">Privacy Policy</a></p>
					<p><a href="#">Termini &amp; Condizioni</a></p>
				</div>
			</div>
		</div>
	</footer>
</template>

<style scoped>
footer {
	position: fixed;
	z-index: 1000;
	bottom: -0.5%;
	left: 12.5%;
	width: 75%;
	padding: 10px;
	text-align: center;
}

.disapearing-footer {
	height: 10px;
	opacity: 0;
	overflow: hidden;
	transition: opacity 0.5s ease-in-out, height 0.5s ease-in-out;
}

h3 {
	@apply text-lg text-center;
}

p,
a,
i > a {
	@apply text-black text-sm text-center mx-auto;
	transition: all 0.2s ease-in-out;

	&:hover {
		color: rgb(116, 0, 200);
	}
}

.footer-copyright {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 8px;
	padding-top: 10px;
}

.footer-copyright > p,
p > a {
	@apply text-gray-400 text-xs;
	transition: all 0.2s ease-in-out;
	margin: 0;
}

/* Stile della "pillola" vetrosa */
.glass-hover {
	border-radius: 50px 50px 50px 50px;
	width: 25px;
	padding-bottom: 10px;
	background-color: rgba(255, 255, 255, 0.01);
	transition: background-color 0.3s ease, backdrop-filter 0.3s ease,
		border-radius 0.3s ease, width 0.3s ease-in-out;
	backdrop-filter: blur(5px);
}

/* Effetto hover per l’effetto vetro */
.footer-hover:hover .glass-hover {
	background-color: rgba(255, 255, 255, 0.3);
	backdrop-filter: blur(15px);
	width: 100%;
}

footer:hover .disapearing-footer {
	height: 165px;
	opacity: 1;
	display: block;
}

.fa-angle-up {
	transition: transform 0.2s ease-in-out;
	font-size: 1.5rem;
}

footer:hover .fa-angle-up {
	transform: rotate(180deg);
}
</style>
