<template>
	<div class="form-floating mt-3">
		<input
			:type="type"
			class="form-control"
			:id="label"
			:placeholder="label"
			@input="updateInput"
			:value="modelValue"
		/>
		<label :for="label">{{ label }}</label>
	</div>
</template>

<script>
export default {
	name: 'Input',
	props: {
		label: String,
		type: String,
		modelValue: [String, Number],
	},
	methods: {
		updateInput(e) {
			this.$emit('update:modelValue', e.target.value)
		},
	},
}
</script>

<style></style>
