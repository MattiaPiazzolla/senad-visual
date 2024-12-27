<template>
	<header
		class="fixed top-0 left-0 w-full z-50 transition-all duration-300"
		:class="[
			isShrunk
				? 'bg-white/95 shadow-md py-2'
				: 'bg-white/30 backdrop-blur-lg py-4',
		]">
		<div
			class="mx-auto px-4 flex items-center justify-between transition-all duration-300"
			:class="[isShrunk ? 'max-w-2xl' : 'container']">
			<!-- Logo -->
			<div class="w-1/4">
				<img
					src="../assets/images/logos/logo-bw-min.webp"
					alt="Logo"
					:class="[
						'transition-all duration-300',
						isShrunk ? 'h-8 w-8' : 'h-10 w-10',
					]" />
			</div>

			<!-- Navigation Links -->
			<nav class="w-1/2">
				<ul class="flex justify-center space-x-8">
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
			<div class="w-1/4 flex justify-end space-x-4">
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
			isShrunk.value = window.scrollY > window.innerHeight * 0.5;
		};

		onMounted(() => {
			window.addEventListener("scroll", handleScroll);
		});

		onUnmounted(() => {
			window.removeEventListener("scroll", handleScroll);
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

<style scoped>
.active-link {
	color: rgb(126, 34, 206);
}

.active-link::after {
	content: "";
	position: absolute;
	left: 0;
	bottom: -4px;
	width: 100%;
	height: 2px;
	background-color: rgb(126, 34, 206);
}

a::after {
	content: "";
	position: absolute;
	left: 0;
	bottom: -4px;
	width: 0;
	height: 2px;
	background-color: rgb(126, 34, 206);
	transition: width 0.3s ease;
}

a:hover::after {
	width: 100%;
}
</style>
