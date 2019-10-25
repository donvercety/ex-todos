import React from 'react';

export default class TodoItem extends React.Component {

	render() {
		let todo = this.props.todo;

		return (
			<li>
				<span className={`item ${todo.done ? 'done' : ''}`}>
					{ todo.title }
				</span>
				<a	href="# "
					className={`del-button ${todo.done ? '' : 'hide'}`}
					onClick={this.props.delTodo.bind(this, todo.id)}
				> X </a>
				<a	href="# "
					className="done-button"
					onClick={this.props.toggleTodo.bind(this, todo.id)}
				> { todo.done ? 'Undone' : 'Done' }</a>
			</li>
		);
	}
}
