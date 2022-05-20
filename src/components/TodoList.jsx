import React, { Component } from 'react'
import classes from './TodoList.module.css'
class TodoList extends Component {
	constructor(props) {
		super()
	}
	render() {
		return (
			<div className={classes.content}>
				{this.props.data.map((el) => (
					<div key={el.id} className={classes.block}>
						<li
							className={
								el.completed ? classes.done : classes.task
							}
						>
							<input
								className={classes.checkbox}
								id={el.id}
								type='checkbox'
								onClick={this.props.checboxHandler}
							/>
							<h5>{el.value}</h5>
							<p>{el.date}</p>
							<button
								className={classes.btn}
								id={el.id}
								onClick={this.props.deleteHandler}
							>
								delete
							</button>
						</li>
						
					</div>
				))}
				<div className={classes.all}>
				<input className={classes.checkbox}onClick={this.props.toggleHandler} type='checkbox' />
				<h4>ALL</h4>
						<button onClick={this.props.deleteAllHandler} className={classes.btnbtn}>ALL delete</button>
				</div>
				
			</div>
		)
	}
}
export default TodoList
