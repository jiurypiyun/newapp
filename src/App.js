import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
// import src from '*.bmp';
function rand(min, max) {
	return Math.floor((Math.random() * (Math.floor(max) - Math.floor(min))) + Math.floor(min));
}
// function App() {
// 	return (
// 		<div className="App">
// 			slmmmmm
// 		</div>
// 	);
// }
console.log(rand(1, 10), rand(5, 10), rand(3, 12), rand(20, 56));

class RealApp extends React.Component {
	state = {
		name: document.getElementById('slm').innerText
	}
	additem=(e)=>{
		e.preventDefault();
		let paragraph=document.createElement('p');
		document.getElementById('task').appendChild(paragraph);
		paragraph.innerHTML=this.state.inputvalue;
	}
	changeHandeler=(e)=>{
		this.setState(
			{
				inputvalue:e.target.value
			}
		)
		console.log(e.target.value);
	}
	render(){
		return (
			<div id='App' className="App">
				<p>hello fuuuckers</p>
				<form action="">
					<label htmlFor="input1">in ye inpute</label>
					<input onChange={this.changeHandeler} type="text" name='input1' />
					<br />
					<input onClick={this.additem} type="submit" value="submit form" />
				</form>
				<div id="task"></div>
			</div>
	)
}
}
export default RealApp;
