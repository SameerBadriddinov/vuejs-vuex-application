<template>
	<p class="text-center display-2">Create article</p>
	<div class="w-50 mx-auto">
		<form @submit.prevent>
			<Input type="text" label="Title" v-model="title" />
			<TextArea type="text" label="Description" v-model="description" />
			<TextArea type="text" label="Body" v-model="body" />
			<Button @click="createArticleHandler" :disabled="isLoading">Create article</Button>
		</form>
	</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
	data() {
		return {
			title: '',
			description: '',
			body: '',
		}
	},
	methods: {
		createArticleHandler() {
			const article = {
				title: this.title,
				body: this.body,
				description: this.description,
				tagList: [],
			}
			this.$store.dispatch('createArticle', article)
			this.$router.push('/')
		},
	},
	computed: {
		...mapState({
			isLoading: state => state.control.isLoading,
		}),
	},
}
</script>

<style></style>
