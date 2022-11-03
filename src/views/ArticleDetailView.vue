<template>
	<h1>Article details</h1>
</template>

<script>
export default {
	mounted() {
		this.$store.dispatch('articleDetail', this.$route.params.slug)
	},
}
</script>
