import React from 'react';
import TodoItem from './TodoItem'

export default class Todos extends React.Component {

	render() {
		return (
			<ul className="items">
				{this.props.todos.map(todo => (
					<TodoItem 
						key={todo.id}
						todo={todo}
						delTodo={this.props.delTodo}
						toggleTodo={this.props.toggleTodo}
					/>
				))}
			</ul>
		);
	}
}