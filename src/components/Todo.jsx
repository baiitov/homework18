import React, { Component } from 'react'
import classes from './Todo.module.css'
class Todo extends Component {
	constructor(props) {
		super()
		this.state = {
			value: '',
		}
	}

	inputChangeHandler = (e) => {
		this.setState({ value: e.target.value })
	}

	submitHandler = (e) => {
		e.preventDefault()
		if (this.state.value === '') {
			return
		}
		const data = {
			value: this.state.value,
			id: Math.random().toString(),
			date: new Date().toLocaleDateString(),
			completed: false,
		}
		this.props.onData(data)
		this.setState({ value: '' })
	}
	render() {
		return (
			<form className={classes.forma} onSubmit={this.submitHandler}>
			<h2>Todo List 2022</h2>
			
					
					<input
						id='input'
						value={this.state.value}
						onChange={this.inputChangeHandler}
						type='text'
					/>
					<button className={classes.btn2}>add</button>
			

				
			</form>
		)
	}
}

export default Todo
