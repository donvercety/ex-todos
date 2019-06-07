import { app, h } from 'hyperapp';

// simulates API calls
import DB from './DB';

import Form from './components/Form';
import Todos from './components/Todos';

function findTodoIndex(todoId) {
	return state.todos.findIndex(todo => {
		return todo.id == todoId;
	});
}

const state = {
	todos: Object.assign([], DB.getAll())
};

const actions = {
	formSubmit: ev => ({ todos }) => {
		ev.preventDefault();
		state.todoTitle = ev.target.title.value;

		let todo = DB.set({
			title: ev.target.title.value,
			done: false
		});

		todos.push(todo);
		ev.target.title.value = '';

		return { todo };
	},
	toggleTodo: ev => ({ todos }) => {
		let i = findTodoIndex(ev.target.parentNode.id);
		if (i > -1) {
			todos[i].done = !todos[i].done;
			DB.put(state.todos[i]);
			return { todos };
		}	
	},
	deleteTodo: ev => ({ todos }) => {
		let i = findTodoIndex(ev.target.parentNode.id);
		if (i > -1) {
			DB.del(ev.target.parentNode.id)
			todos.splice(i, 1);
			return { todos };
		}	
	}
};

const view = (state, actions) => (
	<div class="list">
		<h1 class="header">Hyperapp - To do.</h1>
		<Form formSubmit={actions.formSubmit} />
		<br />
		<Todos />
	</div>
);

app(state, actions, view, document.getElementById('app'));