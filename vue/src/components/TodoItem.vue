<template>
	<li>
		<span class="item" :class="isDone()">
			{{ todo.title }}
		</span>
		<a
			class="del-button"
			:class="toHide()"
			@click="deleteTodo"
		> X </a>
		<a
			class="done-button"
			@click="saveToggledTodo"
		> {{ todo.done ? 'Undone' : 'Done' }}</a>
	</li>
</template>

<script>
export default {
	props: [ 'todo' ],
	methods: {
		isDone() {
			return { done: this.todo.done };
		},

		toHide() {
			return { hide: !this.todo.done };
		},

		deleteTodo() {
			this.$emit('deleteTodo', this.todo);
		},

		saveToggledTodo() {
			this.todo.done = !this.todo.done;
			this.$emit('saveToggledTodo', this.todo);
		}
	}
};
</script>

<style>

</style>
