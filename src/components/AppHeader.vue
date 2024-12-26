<script>
export default {
	name: "AppHeader",
	data() {
		return {
			isShrunk: false,
		};
	},
	mounted() {
		// Add scroll event listener
		window.addEventListener("scroll", this.handleScroll);
	},
	beforeDestroy() {
		// Remove event listener when component is destroyed
		window.removeEventListener("scroll", this.handleScroll);
	},
	methods: {
		handleScroll() {
			// Check if scroll position is greater than 50vh
			this.isShrunk = window.scrollY > window.innerHeight * 0.5;
		},
	},
};
</script>

<template>
	<div>
		<header
			class="flex justify-center py-4 fixed w-full transition-all duration-300"
			:class="{ 'header-shrunk': isShrunk }">
			<div
				class="px-3 flex items-center transition-all duration-300"
				:class="[isShrunk ? 'w-1/2 mx-auto' : 'container']">
				<div class="navbar-logo transition-all duration-300">
					<img
						src="../assets/images/logos/logo-bw-min.webp"
						alt="Logo"
						:class="{ 'shrunk-logo': isShrunk }" />
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
header {
	background-color: rgba(255, 255, 255, 0.3);
	backdrop-filter: blur(15px);
	top: 0;
	left: 0;
	z-index: 999;

	&.header-shrunk {
		background-color: rgba(255, 255, 255, 0.95);
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	}
}

/* Navbar */
.navbar-logo {
	width: 25%;
	img {
		max-width: 2.5rem;
		transition: all 0.3s ease;

		&.shrunk-logo {
			max-width: 2rem;
		}
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
