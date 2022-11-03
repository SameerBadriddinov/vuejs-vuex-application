<template>
	<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
		<Loader v-if="isLoading" class="offset-md-6" />
		<AriticleCard v-else v-for="article in data" :article="article" :key="article.id" />
	</div>
</template>

<script>
import {mapState} from 'vuex'
import AriticleCard from '@/components/ArticleCard.vue'
export default {
	components: {
		AriticleCard,
	},
	computed: {
		...mapState({
			data: state => state.articles.data,
			isLoading: state => state.articles.isLoading,
			error: state => state.articles.error,
		}),
	},
	mounted() {
		this.$store.dispatch('articles')
	},
}
</script>

<style></style>
