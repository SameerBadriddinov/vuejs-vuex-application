<template>
	<p class="text-center display-2">Create article</p>
	<div class="w-50 mx-auto">
		<form @submit.prevent>
			<Input type="text" label="Title" v-model="title" />
			<TextArea type="text" label="Description" v-model="description" />
			<TextArea type="text" label="Body" v-model="body" />
			<Button @click="createArticleHandler">Create article</Button>
		</form>
	</div>
</template>

<script>
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
			console.log(article)
		},
	},
}
</script>

<style></style>
