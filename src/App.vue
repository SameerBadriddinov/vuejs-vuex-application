<template>
	<div>
		<div class="container">
			<Navbar />
			<RouterView />
		</div>
	</div>
</template>

<script>
import {mapState} from 'vuex'
import {Navbar} from '@/components'
import {RouterView} from 'vue-router'
export default {
	components: {Navbar},
	mounted() {
		this.$store.dispatch('getUser')
	},
}
</script>

<style></style>
