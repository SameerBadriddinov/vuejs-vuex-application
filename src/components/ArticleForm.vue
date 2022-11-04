<template>
	<div class="w-50 mx-auto">
		<form @submit.prevent>
			<Input type="text" label="Title" v-model="title" />
			<TextArea type="text" label="Description" v-model="description" />
			<TextArea type="text" label="Body" v-model="body" />
			<Button @click="editArticle">Edit article</Button>
		</form>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		body: {
			type: String,
			required: true,
		},
		editArticleHandler: {
			type: Function,
			required: true,
		},
	},
	data() {
		return {
			title: this.title,
			description: this.description,
			body: this.body,
		}
	},
	methods: {
		editArticle() {
			const article = {
				title: this.title,
				body: this.body,
				description: this.description,
				tagList: [],
			}
			this.editArticleHandler(article)
		},
	},
}
</script>
