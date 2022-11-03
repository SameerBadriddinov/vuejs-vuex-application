import axios from './axios'

const ArticleService = {
	articles() {
		return axios.get('/articles')
	},
}

export default ArticleService
