<template>
	<div class="form-floating mt-3">
		<textarea
			:type="type"
			class="form-control"
			:id="label"
			:placeholder="label"
			@input="updateInput"
			:value="modelValue"
		></textarea>
		<label :for="label">{{ label }}</label>
	</div>
</template>

<script>
export default {
	name: 'TextArea',
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
