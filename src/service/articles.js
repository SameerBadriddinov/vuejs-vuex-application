import axios from './axios'

const ArticleService = {
	articles() {
		return axios.get('/articles')
	},
	articleDetail(slug) {
		return axios.get(`/article/${slug}`)
	},
}

export default ArticleService
