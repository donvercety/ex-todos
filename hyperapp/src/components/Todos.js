import { h } from 'hyperapp';

import TodoItem from '../components/TodoItem'

const Todos = () => ({ todos }) => (
	<ul class="items">
		{ todos.map(todo => ( <TodoItem todo={todo} /> )) }
	</ul>
)

export default Todos;