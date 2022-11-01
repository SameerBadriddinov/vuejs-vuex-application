import axios from './axios'

const AuthServise = {
	register(user) {
		return axios.post('/users', {user})
	},
}

export default AuthServise
