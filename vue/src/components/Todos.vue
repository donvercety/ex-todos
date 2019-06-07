<template>
	<ul class="items">
		<TodoItem v-for="todo in todos"
			:key="todo.id"
			:todo="todo"
			@deleteTodo="deleteTodo"
			@saveToggledTodo="saveToggledTodo"
		/>
	</ul>
</template>

<script>
import TodoItem from './TodoItem';

export default {
	components: {
		TodoItem
	},
	props: {
		todos: {
			type: Array,
			required: true,
			default: () => []
		}
	},
	methods: {
		deleteTodo(todo) {
			console.log('$event in Todos (deleteTodo)');
			this.$emit('deleteTodo', todo);
		},
		saveToggledTodo(todo) {
			console.log('$event in Todos (saveToggledTodo)');
			this.$emit('saveToggledTodo', todo);
		}
	}
};
</script>
