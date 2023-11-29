<template>
	<div class="main">
		<router-view />
	</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	data() {
		return {};
	},
	computed() {
		return {
			...mapGetters["showLogin"],
		};
	},
};
</script>

<style>
html,
body,
#app {
	width: 100%;
	height: 100%;
}
</style>
