<template>
	<div>
		<Loader v-if="isLoading" class="offset-md-6" />
		<ArticleDetail v-else />
	</div>
</template>

<script>
import ArticleDetail from '@/components/ArticleDetail.vue'
import {mapState} from 'vuex'
export default {
	components: {
		ArticleDetail,
	},
	computed: {
		...mapState({
			isLoading: state => state.articles.isLoading,
		}),
	},
	mounted() {
		this.$store.dispatch('articleDetail', this.$route.params.slug)
	},
}
</script>
