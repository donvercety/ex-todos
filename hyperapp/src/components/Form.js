import { h } from 'hyperapp';

const Form = ({ formSubmit }) => (
	<form class="item-add" onsubmit={formSubmit}>
		<input type="text" name="title" placeholder="Type a new item here." class="input" autocomplete="off" required maxlength="48" />
		<input type="submit" value="Add" class="submit" />
	</form>
)

export default Form;