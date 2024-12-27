<script>
import { ref, onMounted, onUnmounted } from "vue";
import AppCarouselOne from "./AppCarouselOne.vue";

export default {
	components: {
		AppCarouselOne,
	},
	setup() {
		const isVisible = ref(false);

		const handleIntersection = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					isVisible.value = true;
				}
			});
		};

		onMounted(() => {
			const observer = new IntersectionObserver(handleIntersection, {
				threshold: 0.1,
			});
			const section = document.getElementById("second-section");
			observer.observe(section);
		});

		return {
			isVisible,
		};
	},
};
</script>
<template>
	<div
		id="second-section"
		class="padding-container"
		:class="{ 'fade-in': isVisible }">
		<div class="container">
			<div class="top flex">
				<div class="left w-1/2 bg-red-50"></div>
				<div class="right w-1/2">
					<AppCarouselOne />
				</div>
			</div>
			<div class="center flex">
				<div class="left w-1/2"></div>
				<div class="right w-1/2 bg-red-50"></div>
			</div>
			<div class="bottom flex">
				<div class="left w-1/2 bg-red-50"></div>
				<div class="right w-1/2"></div>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.padding-container {
	min-height: 100vh;
	padding: 50px 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	opacity: 0;
	transition: opacity 1s ease-in-out;
}

.fade-in {
	opacity: 1;
}

.container {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.top {
	height: calc(100% / 3);
}
.center {
	height: calc(100% / 3);
}
.bottom {
	height: calc(100% / 3);
}
</style>
