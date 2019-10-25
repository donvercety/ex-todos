import React from 'react';
import DB from './DB';

import Form from './components/Form';
import Todos from './components/Todos';

export default class App extends React.Component {

	constructor() {
		super();
		this.state = {
			todos: []
		};
	}

	componentDidMount() {
		this.setState({
			todos: Object.assign([], DB.getAll())
		});
	}

	addTodo = (title) => {
		console.log('props in App (addTodo)');

		this.setState({
			todos: [
				...this.state.todos,
				DB.set(new Todo(title)) // add in mocked DB, will return an entry with unique id
			]
		});
	}

	delTodo = (id) => {
		console.log(`props in App (delTodo) id:${id}`);

		this.setState({
			todos: this.state.todos.filter(todo => {
				if (todo.id === id) {
					DB.del(todo.id); // remove from mocked DB
					return false;
				}
				return true;
			})
		});
	}

	toggleTodo = (id) => {
		console.log(`props in App (toggleTodo) id:${id}`);

		this.setState({
			todos: this.state.todos.map(todo => {
				if (todo.id === id) {
					todo.done = !todo.done;
					DB.put(todo); // update in mocked DB
				}
				return todo;
			})
		});
	}

	render() {
		return (
			<div className="list">
				<h1 className="header">React - To do.</h1>
				<Form addTodo={this.addTodo} />
				<br />
				<Todos
					todos={this.state.todos}
					delTodo={this.delTodo}
					toggleTodo={this.toggleTodo}
				/>
			</div>
		);
	}
}

class Todo {
	constructor(title, done = false) {
		this.title = title;
		this.done = done;
	}
}