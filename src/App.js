import TodoList from './components/TodoList'
import { Component } from 'react'
import './App.css'
import Todo from './components/Todo'
class App extends Component {
	dataHandler = (data) => {
		this.setState({ newData: [data, ...this.state.newData] })
	}
	constructor() {
		super()
		this.state = {
			newData: [],
		}
	}
	toggleHandler = (e) => {
		this.setState({
			newData: this.state.newData.map((el) => {
				if (el.id) {
					el.completed = !el.completed
				}
				return el
			}),
		})
	}
	deleteHandler = (e) => {
		this.setState({
			newData: this.state.newData.filter((el) => el.id !== e.target.id),
		})
	}
	deleteAllHandler = (e) => {
		this.setState({ newData: this.state.newData.filter((el) => el !== el) })
	}
	checboxHandler = (e) => {
		this.setState({
			newData: this.state.newData.map((el) => {
				if (el.id === e.target.id) {
					el.completed = !el.completed
				}
				return el
			}),
		})
	}
	render() {
		return (
			<div className='App'>
				<Todo onData={this.dataHandler} />
				<TodoList
					deleteAllHandler={this.deleteAllHandler}
					toggleHandler={this.toggleHandler}
					checboxHandler={this.checboxHandler}
					deleteHandler={this.deleteHandler}
					data={this.state.newData}
				/>
			</div>
		)
	}
}

export default App
