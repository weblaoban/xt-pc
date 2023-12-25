<template>
	<div class="main">
		<router-view />
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import loginMask from './views/common/loginDialog.vue'
export default {
	data() {
		return {};
	},
	computed:{
			...mapGetters(["showLogin"]),
		
	},
    components:{
        loginMask
    },
    created(){
        console.log(this.showLogin)
    }
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
