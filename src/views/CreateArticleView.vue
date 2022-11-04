<template>
	<p class="text-center display-2">Create article</p>
	<ArticleForm
		:initialValue="initialValue"
		:onSubmitHandler="createArticleHandler"
		:clickText="'Craete article'"
	/>
</template>

<script>
import {mapState} from 'vuex'
import ArticleForm from '../components/ArticleForm.vue'
export default {
	data() {
		return {
			title: '',
			description: '',
			body: '',
		}
	},
	components: {ArticleForm},
	methods: {
		createArticleHandler(article) {
			this.$store.dispatch('createArticle', article)
			this.$router.push('/')
		},
	},
	computed: {
		...mapState({
			isLoading: state => state.control.isLoading,
		}),
		initialValue() {
			return {
				title: '',
				description: '',
				body: '',
			}
		},
	},
}
</script>

<style></style>
