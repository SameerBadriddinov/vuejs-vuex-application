const state = {
	isLoading: false,
}

const mutations = {
	setLoading(state) {
		state.isLoading = true
	},
}

const actions = {
	register(context) {
		setTimeout(() => {
			context.commit('setLoading')
		}, 2000)
	},
}

export default {
	state,
	mutations,
	actions,
}
