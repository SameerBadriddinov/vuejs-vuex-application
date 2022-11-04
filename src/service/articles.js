import axios from './axios'

const ArticleService = {
	articles() {
		return axios.get('/articles')
	},
	articleDetail(slug) {
		return axios.get(`/articles/${slug}`)
	},
	createArticle(article) {
		return axios.post('/articles', {article})
	},
	deleteArticle(slug) {
		return axios.delete(`/articles/${slug}`)
	},
	updateArticle(article, slug) {
		return axios.put(`/articles/${slug}`, {article})
	},
}

export default ArticleService
