import ArticleService from '../service/articles'

const state = {
	isLoading: false,
}

const mutations = {
	createArticleStart(state) {
		state.isLoading = true
	},
	createArticleSuccess() {
		state.isLoading = false
	},
	createArticleFailure() {
		state.isLoading = false
	},
}

const actions = {
	createArticle(context, article) {
		return new Promise((resolve, reject) => {
			context.commit('createArticleStart')
			ArticleService.createArticle(article)
				.then(() => context.commit('createArticleSuccess'))
				.catch(() => context.commit('createArticleFailure'))
		})
	},
}

export default {
	state,
	mutations,
	actions,
}
