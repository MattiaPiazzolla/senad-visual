<script>
import AppJumboVue from "../components/AppJumbo.vue";
import AppHomeSectionOne from "../components/AppHomeSectionOne.vue";
import AppHomeSectionTwo from "../components/AppHomeSectionTwo.vue";
import AppInstagranSection from "../components/AppInstagranSection.vue";
import AppSecondSection from "../components/AppSecondSection.vue";

export default {
	components: {
		AppJumboVue,
		AppHomeSectionOne,
		AppHomeSectionTwo,
		AppInstagranSection,
		AppSecondSection,
	},
};
</script>
<template>
	<AppJumboVue />
	<AppHomeSectionOne />
	<!-- <AppHomeSectionTwo /> -->
	<AppSecondSection />
	<!-- <AppInstagranSection /> -->
</template>
<style lang=""></style>
