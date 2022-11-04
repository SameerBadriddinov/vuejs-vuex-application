<template>
	<p class="text-center display-2">Edit article</p>
	<ArticleForm
		v-if="article"
		:title="article.title"
		:description="article.description"
		:body="article.body"
		:editArticleHandler="editArticleHandler"
	/>
</template>

<script>
import {mapState} from 'vuex'
import ArticleForm from '../components/ArticleForm.vue'
export default {
	components: {ArticleForm},
	methods: {
		editArticleHandler(article) {
			console.log(article)
		},
	},
	computed: {
		...mapState({
			article: state => state.articles.articleDetail,
		}),
	},
	mounted() {
		this.$store.dispatch('articleDetail', this.$route.params.slug)
	},
}
</script>
