<script>
import AppCarouselOne from "./AppCarouselOne.vue";

export default {
	components: {
		AppCarouselOne,
	},
};
</script>
<template>
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
</template>
<style lang="scss" scoped>
.container {
}
.top {
	height: calc(100vh / 3);
}
.center {
	height: calc(100vh / 3);
}
.bottom {
	height: calc(100vh / 3);
}
</style>
