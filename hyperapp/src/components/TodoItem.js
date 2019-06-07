import { h } from 'hyperapp';

const Todos = ({ todo }) => (state, { deleteTodo, toggleTodo }) => {
	let done = todo.done;

	return (
		<li id={todo.id}>
			<span class={'item' + (done ? ' done' : '')}>
				{todo.title}
			</span>
			<a onclick={deleteTodo} class={ 'del-button' + (done ? '' : ' hide')}> X </a>
			<a onclick={toggleTodo} class="done-button">{done ? 'Undone' : 'Done'}</a>
		</li>
	)
}

export default Todos;