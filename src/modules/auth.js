import {setItem} from '../helpers/persistaneStorage'
import AuthServise from '../service/auth'

const state = {
	isLoading: false,
	user: null,
	errors: null,
}

const mutations = {
	registerStart(state) {
		state.isLoading = true
		state.user = null
		state.errors = null
	},
	registerSuccess(state, payload) {
		state.isLoading = false
		state.user = payload
	},
	registerFailure(state, payload) {
		state.isLoading = false
		state.errors = payload.errors
	},
	loginStart(state) {
		state.isLoading = true
		state.user = null
		state.errors = null
	},
	loginSuccess(state, payload) {
		state.isLoading = false
		state.user = payload
	},
	loginFailure(state, payload) {
		state.isLoading = false
		state.errors = payload.errors
	},
}

const actions = {
	register(context, user) {
		return new Promise((resolve, reject) => {
			context.commit('registerStart')
			AuthServise.register(user)
				.then(response => {
					context.commit('registerSuccess', response.data.user)
					setItem('token', response.data.user.token)
					resolve(response.data.user)
				})
				.catch(error => {
					context.commit('registerFailure', error.response.data)
					reject(error.response.data)
				})
		})
	},
	login(context, user) {
		return new Promise((resolve, reject) => {
			context.commit('loginStart')
			AuthServise.login(user)
				.then(response => {
					context.commit('registerSuccess', response.data.user)
					setItem('token', response.data.user.token)
					resolve(response.data.user)
				})
				.catch(error => {
					context.commit('registerFailure', error.response.data)
					reject(error.response.data)
				})
		})
	},
}

export default {
	state,
	mutations,
	actions,
}
