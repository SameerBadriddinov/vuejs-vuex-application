<template>
	<main class="form-signin w-25 m-auto mt-5">
		<form>
			<img :src="logo" alt="logo" style="width: 100px; cursor: pointer" @click="toHomeHandler" />
			<h1 class="h3 mb-3 fw-normal mt-3">Register</h1>

			<Input :label="'Name'" :type="'text'" />
			<Input :label="'Email address'" :type="'email'" />
			<Input :label="'Password'" :type="'password'" />

			<Button type="submit" :disabled="isLoading" @click="submitHandler">Register</Button>
		</form>
	</main>
</template>

<script>
import {logo} from '../contstants'
export default {
	data() {
		return {
			logo,
		}
	},
	computed: {
		isLoading() {
			return this.$store.state.auth.isLoading
		},
	},
	methods: {
		submitHandler(e) {
			e.preventDefault()
			this.$store.commit('setLoading')
		},
	},
}
</script>

<style></style>
