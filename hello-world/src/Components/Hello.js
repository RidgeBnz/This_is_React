import React from 'react'

const Hello = () => {
	// return (
	// 	<div className = 'dummyClass>
	// 		<h1>Hello Ridge!</h1>
	// 	</div>
	// )
	return React.createElement('div', 
	{id: 'hello', className: 'dummyClass'}, //Object of key value pairs to be appliet to element ex id attribute to id tag, can also add class
	React.createElement('h1', null, 'Hello Ridge')
	)
}

export default Hello;