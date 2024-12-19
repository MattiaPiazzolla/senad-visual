<script>
export default {
	mounted() {
		// Listener per rilevare lo scroll
		window.addEventListener("scroll", this.handleScroll);
	},
	beforeUnmount() {
		// Rimuovere il listener quando il componente viene distrutto
		window.removeEventListener("scroll", this.handleScroll);
	},
	data() {
		return {
			hideHeader: false, // Flag per nascondere l'header
		};
	},
	methods: {
		handleScroll() {
			// Nascondi l'header quando si scrolla oltre 50vh
			this.hideHeader = window.scrollY > window.innerHeight * 0.5;
		},
	},
};
</script>

<template>
	<div>
		<header
			:class="{ 'hidden-header': hideHeader, 'visible-header': !hideHeader }"
			class="flex justify-center py-4">
			<div class="container px-3 flex items-center">
				<div class="navbar-logo">
					<img src="../assets/images/logos/logo-bw-min.webp" alt="Logo" />
				</div>
				<div class="navbar-list flex justify-center">
					<ul class="flex">
						<li>
							<router-link to="/" exact-active-class="active-link" exact>
								Home
							</router-link>
						</li>
						<li>
							<router-link to="/about" active-class="active-link">
								About
							</router-link>
						</li>
						<li>
							<router-link to="/projects" active-class="active-link">
								Projects
							</router-link>
						</li>
					</ul>
				</div>
				<div class="navbar-social flex justify-end">
					<a href="https://instagram.com"
						><i class="fa-brands fa-instagram"></i
					></a>
					<a href="https://facebook.com"
						><i class="fa-brands fa-facebook"></i
					></a>
					<a href="https://whatsapp.com"
						><i class="fa-brands fa-whatsapp"></i
					></a>
				</div>
			</div>
		</header>
	</div>
</template>

<style lang="scss" scoped>
/* Header base */
header {
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;

	/* Effetto vetro */
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
	background-color: rgba(255, 255, 255, 0.25);

	/* Transizione morbida */
	transition: opacity 0.75s ease, transform 0.75s ease;
}

/* Header visibile */
.visible-header {
	opacity: 1;
	transform: translateY(0);
}

/* Header nascosto */
.hidden-header {
	opacity: 0;
	transform: translateY(-100%);
	pointer-events: none; /* Evita interazioni */
}

/* Header visibile su hover della parte superiore */
.hidden-header:hover {
	opacity: 1;
	transform: translateY(0);
	pointer-events: all;
}

/* Navbar */
.navbar-logo {
	width: 25%;
	img {
		max-width: 2.5rem;
	}
}
.navbar-list {
	width: 50%;
	ul {
		display: flex;

		li {
			position: relative;
			color: #757575;
			margin: 0 10px;
			cursor: pointer;
			transition: color 0.3s ease;

			&:hover {
				color: rgb(116, 0, 200);
			}

			/* Underline effect for hover */
			&::after {
				content: "";
				position: absolute;
				left: 0;
				bottom: -5px;
				width: 0;
				height: 2px;
				background-color: rgb(116, 0, 200);
				transition: width 0.3s ease;
			}
			&:hover::after {
				width: 100%;
			}

			/* Styling for active link */
			.router-link-active,
			.router-link-exact-active {
				color: rgb(116, 0, 200);

				/* Underline for active links */
				&::after {
					content: "";
					position: absolute;
					left: 0;
					bottom: -5px;
					width: 50%;
					height: 2px;
					background-color: rgb(116, 0, 200);
					transition: width 0.3s ease;
				}
			}
		}
	}
}
.navbar-social {
	width: 25%;
	a {
		font-size: 1.25rem;
		margin: 10px 7.5px;
		transition: color 0.3s ease;

		.fa-facebook:hover {
			color: #3b5998;
		}
		.fa-instagram:hover {
			color: #c13584;
		}
		.fa-whatsapp:hover {
			color: #25d366;
		}
	}
}
</style>
