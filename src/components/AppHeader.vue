<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
	name: "ShrinkingHeader",
	setup() {
		const isShrunk = ref(false);
		const currentPath = ref(window.location.pathname);

		const navigationItems = [
			{ name: "Home", href: "/" },
			{ name: "About", href: "/about" },
			{ name: "Projects", href: "/projects" },
		];

		const socialLinks = [
			{
				name: "Instagram",
				href: "https://instagram.com",
				icon: "fa-brands fa-instagram",
				hoverClass: "hover:text-pink-600",
			},
			{
				name: "Facebook",
				href: "https://facebook.com",
				icon: "fa-brands fa-facebook",
				hoverClass: "hover:text-blue-600",
			},
			{
				name: "WhatsApp",
				href: "https://whatsapp.com",
				icon: "fa-brands fa-whatsapp",
				hoverClass: "hover:text-green-500",
			},
		];

		const handleScroll = () => {
			const scrollContainer = document.getElementById("scroll-container");
			isShrunk.value = scrollContainer.scrollTop > 0;
		};

		onMounted(() => {
			const scrollContainer = document.getElementById("scroll-container");
			scrollContainer.addEventListener("scroll", handleScroll);
		});

		onUnmounted(() => {
			const scrollContainer = document.getElementById("scroll-container");
			scrollContainer.removeEventListener("scroll", handleScroll);
		});

		return {
			isShrunk,
			currentPath,
			navigationItems,
			socialLinks,
		};
	},
};
</script>

<template>
	<header
		class="fixed top-0 z-50 flex items-center transition-all duration-300"
		:class="[isShrunk ? 'header-shrunk h-' : 'header-normal']">
		<div
			class="px-4 w-full flex align-middle justify-between transition-all duration-300"
			:class="[isShrunk ? '' : 'container']">
			<!-- Logo -->
			<div class="w-1/4">
				<img
					src="../assets/images/logos/logo-bw-min.webp"
					alt="Logo"
					class="logo" />
			</div>

			<!-- Navigation Links -->
			<nav class="w-1/2">
				<ul class="h-full flex items-center justify-center space-x-8">
					<li v-for="item in navigationItems" :key="item.name">
						<a
							:href="item.href"
							class="relative text-gray-600 hover:text-purple-700 transition-colors duration-300"
							:class="{ 'active-link': item.href === currentPath }">
							{{ item.name }}
						</a>
					</li>
				</ul>
			</nav>

			<!-- Social Icons -->
			<div class="w-1/4 flex justify-end items-center space-x-4">
				<a
					v-for="social in socialLinks"
					:key="social.name"
					:href="social.href"
					:class="[
						'text-gray-600 transition-colors duration-300',
						social.hoverClass,
					]">
					<i :class="social.icon"></i>
				</a>
			</div>
		</div>
	</header>
</template>

<style lang="scss" scoped>
.header-shrunk {
	height: 40px;
	width: 50%;
	max-width: 450px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	left: 50%;
	transform: translateX(-50%);
	justify-content: space-between;
	border-radius: 15px;
	background-color: rgba(255, 255, 255, 0.3);
	backdrop-filter: blur(15px);
	transition: all 0.3s ease;

	.logo {
		width: 25px;
		height: 25px;
		transition: all 0.3s ease;
	}
	i {
		font-size: 0.8rem;
		transition: all 0.3s ease;
	}

	nav ul li a {
		font-size: 0.8rem;
		transition: all 0.3s ease;
	}
	ul {
		margin: 0 100px;
	}

	&:hover {
		background-color: rgba(255, 255, 255, 0.5);
		height: 84px;
		padding: 0 20px;
		border-radius: 25px;
		width: 100%;
		max-width: 100%;
		transition: all 0.3s ease;

		.logo {
			width: 50px;
			height: 50px;
		}

		i {
			font-size: 1.25rem;
		}

		nav ul li a {
			font-size: 1rem;
		}
		@media (min-width: 1536px) {
			max-width: 1536px;
		}
		@media (min-width: 1280px) {
			max-width: 1280px;
		}
		@media (min-width: 1024px) {
			max-width: 1024px;
		}
		@media (min-width: 768px) {
			max-width: 768px;
		}
		@media (min-width: 640px) {
			max-width: 640px;
		}
	}
}

.header-normal {
	height: 64px;
	width: 100%;

	background-color: rgba(255, 255, 255, 0.5);
	backdrop-filter: blur(15px);
	transition: all 0.3s ease;

	.logo {
		width: 50px;
		height: 50px;
	}

	i {
		font-size: 1.25rem;
	}
}

.active-link {
	color: rgb(126, 34, 206);
	position: relative;

	&::after {
		content: "";
		position: absolute;
		left: 0;
		bottom: -4px;
		width: 25%;
		height: 2px;
		background-color: rgb(126, 34, 206);
		transition: all 0.3s ease;
	}

	&:hover::after {
		width: 100%;
	}
}

li {
	position: relative;

	a {
		position: relative;

		&::after {
			content: "";
			position: absolute;
			left: 0;
			bottom: -4px;
			width: 0;
			height: 2px;
			background-color: rgb(126, 34, 206);
			transition: all 0.3s ease;
		}

		&:hover::after {
			width: 100%;
		}
	}
}
</style>
