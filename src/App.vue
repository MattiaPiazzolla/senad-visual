<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
	components: {
		AppHeader,
		AppFooter,
	},
};
</script>

<template>
	<div class="app">
		<AppHeader />
		<div class="snap-container">
			<router-view />
		</div>
		<AppFooter />
	</div>
</template>

<style lang="scss">
/* Stile per abilitare lo scroll snap */
.snap-container {
	display: flex;
	flex-direction: column;
	height: 100vh;
	overflow-y: scroll;
	scroll-snap-type: y mandatory; /* Abilita lo snap */
	scroll-behavior: smooth; /* Scorrimento morbido */

	/* Nascondi la scrollbar, opzionale */
	&::-webkit-scrollbar {
		display: none;
	}
}

/* Ogni sezione è una snap-area */
.snap-container > * {
	height: 100vh; /* Ogni sezione occupa 100vh */
	scroll-snap-align: start; /* Allinea l'inizio della sezione */
}
</style>
