import React from 'react';

export default class Form extends React.Component {

	constructor() {
		super();
		this.state = {
			title: ''
		};
	}

	onChange = (ev) => {
		this.setState({
			[ev.target.name]: ev.target.value.trimStart()
		});
	}

	onSubmit = (ev) => {
		ev.preventDefault();
		this.props.addTodo(this.state.title.trim());
		this.setState({ title: '' });
	}

	render() {
		return (
			<form className="item-add" onSubmit={this.onSubmit}>
				<input
					type="text"
					name="title"
					placeholder="Type a new item here."
					className="input"
					autoComplete="off"
					required
					maxLength="48"
					value={this.state.title}
					onChange={this.onChange}
				/>
				<input
					type="submit"
					value="Add"
					className="submit"
				/>
		</form>
		);
	}
}