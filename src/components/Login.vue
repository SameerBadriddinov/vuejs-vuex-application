<template>
	<main class="form-signin w-25 m-auto mt-5">
		<form>
			<img :src="logo" alt="logo" style="width: 100px; cursor: pointer" @click="toHomeHandler" />
			<h1 class="h3 mb-3 fw-normal mt-3">Login</h1>

			<Input :label="'Email address'" :type="'email'" />
			<Input :label="'Password'" :type="'password'" />

			<Button type="submit">Login</Button>
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
}
</script>

<style></style>
