import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import Hello  from './Components/Hello'
import Message from './Components/Message'
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import UserGreeting from './Components/UserGreeting';
import NameList from './Components/NameList';
import StyleSheet from './Components/StyleSheet';
import Inline from './Components/Inline';
import './Components/appStyles.css'
import styles from './Components/appStyles.module.css'
import Form from './Components/Form';
import LifecycleA from './Components/LifecycleA';

class App extends Component{
	render() {
		return (
			<div className="App">
				<LifecycleA/>
				{/* <Form/> */}
				{/* <h1 className='error'>Error</h1>
				<h1 className={styles.success}>Success</h1> */}
				{/* <Inline/> */}
				{/* <StyleSheet primary={true}/> */}
				{/* <NameList/> */}
				{/* <ParentComponent/> */}
				{/* <UserGreeting/> */}
				{/* <EventBind/> */}
				{/* <ClassClick/>
				<FunctionClick/>  */}
				{/* <Counter/> */}
				{/* <Message/> */}
				{/* <Greet name ="Tony" heroName="Iron man"> 
				<p>This is children prop</p>
				</Greet>
				<Greet name ="Steve" heroName="Captain America">
					<button>Action</button>
				</Greet>
				</Greet>
				 <Welcome name ="Tony" heroName="Iron man"/> 
			 	 <Greet name ="Bruce" heroName="Hulk"></Greet>
				<Welcome name ="Steve" heroName="Captain America"/> 
				<Welcome name ="Bruce" heroName="Hulk"/>  */}
			  {/*<Hello/>*/}
			 
			</div>
		  );
	}
}
export default App;
