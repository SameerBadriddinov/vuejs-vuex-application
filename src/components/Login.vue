<template>
	<main class="form-signin w-25 m-auto mt-5">
		<form>
			<img :src="logo" alt="logo" style="width: 100px; cursor: pointer" @click="toHomeHandler" />
			<h1 class="h3 mb-3 fw-normal mt-3">Login</h1>

			<ValidationError v-if="validationErrors" :validationErrors="validationErrors" />

			<Input :label="'Email address'" :type="'email'" v-model="email" />
			<Input :label="'Password'" :type="'password'" v-model="password" />

			<Button type="submit" :disabled="isLoading" @click="submitHandler">Login</Button>
		</form>
	</main>
</template>

<script>
import {mapState} from 'vuex'
import {logo} from '../contstants'
import ValidationError from '@/components/ValidationError.vue'
export default {
	data() {
		return {
			logo,
			email: '',
			password: '',
		}
	},
	components: {
		ValidationError,
	},
	computed: {
		...mapState({
			isLoading: state => state.auth.isLoading,
			validationErrors: state => state.auth.errors,
		}),
	},
	methods: {
		submitHandler(e) {
			e.preventDefault()
			const data = {
				username: this.username,
				email: this.email,
				password: this.password,
			}
			this.$store
				.dispatch('login', data)
				.then(user => {
					console.log('USER', user)
					this.$router.push({name: 'home'})
				})
				.catch(err => console.log('ERROR', err))
		},
	},
}
</script>

<style></style>
