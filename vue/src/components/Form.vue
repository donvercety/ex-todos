<template>
	<form class="item-add" @submit.prevent="formSubmit">
		<input
			v-model="title"
			type="text"
			name="title"
			placeholder="Type a new item here."
			class="input"
			autocomplete="off"
			required
			maxlength="48"
		/>
		<input
			type="submit"
			value="Add"
			class="submit"
		/>
	</form>
</template>

<script>
export default {
	data() {
		return {
			title: ''
		};
	},
	methods: {
		formSubmit() {
			this.$emit('saveNewTodo', {
				title: this.title,
				done: false
			});
			this.title = '';
		}
	}
};
</script>

<style>

</style>
