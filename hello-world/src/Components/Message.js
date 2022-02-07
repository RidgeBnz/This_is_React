import React, {Component} from 'react'

class Message extends Component {

	//Create a state object and initialize it
	constructor() {
		super() // required because extending react component class and a call has to be made
		this.state = {
			message: 'Welcome visitor'
		}
	}

	changeMessage() { //method needed to call to alter the state of a class component
		this.setState ({
			message: 'Thank you for subbing to my only fans'
		})
	}

	render() {
		return (
			<div>
				<h1>{this.state.message}</h1>
				<button onClick={() => this.changeMessage()}>Subscribe</button>
				
			</div>
		) //parenthesis required because code exapnds multiple lines, and enclosing div tag because react 
		// will only want element returned
	}
}

export default Message