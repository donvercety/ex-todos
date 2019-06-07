<template>
	<div class="list">
		<h1 class="header">Vue - To do.</h1>
		<Form @saveNewTodo="saveNewTodo" />
		<br>
		<Todos
			:todos="todos"
			@deleteTodo="deleteTodo"
			@saveToggledTodo="saveToggledTodo"
		/>
	</div>
</template>

<script>
import DB from './DB';

import Form from './components/Form';
import Todos from './components/Todos';

export default {
	name: "App",
	components: {
		Form,
		Todos
	},
	data() {
		return {
			todos: []
		};
	},
	mounted() {
		this.todos = Object.assign([], DB.getAll());
	},
	methods: {
		saveNewTodo(todo) {
			console.log('$event in App (saveNewTodo)');
			this.todos.push(DB.set(todo));
		},
		deleteTodo(todo) {
			console.log('$event in App (deleteTodo)');
			DB.del(todo.id);
			let i = this.todos.findIndex(_todo => _todo.id == todo.id);
			if (i > -1) {
				this.todos.splice(i, 1);
			}
		},
		saveToggledTodo(todo) {
			console.log('$event in App (saveToggledTodo)');
			DB.put(todo);
		}
	}
};
</script>
