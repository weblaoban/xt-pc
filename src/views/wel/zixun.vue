<!-- 信托资讯 -->
<template>
	<div class="index-container">
        <main-header :active="6"></main-header>
		信托资讯
	<main-footer></main-footer>
	</div>
</template>

<script>
import mainFooter from '../common/footer.vue'
import mainHeader from '../common/header.vue'
export default {
	name: "jeZi",
	components: {
        mainFooter,
        mainHeader
	},
	data() {
		return {
		};
	},
	created() {},
	methods: {
    },
};
</script>

<style lang="scss">

</style>
