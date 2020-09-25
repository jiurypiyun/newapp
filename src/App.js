import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
// import src from '*.bmp';
function rand(min, max) {
	return Math.floor((Math.random() * (Math.floor(max) - Math.floor(min))) + Math.floor(min));
}
//in commenta mohm nabud
//vali ina vase test mohme 
//hnuz nmidunm daqgan drm chi kar mikonm 
console.log("slm");
console.log('in shabih qabli am nist')

class RealApp extends React.Component {
	state = {
		name: document.getElementById('slm').innerText
	}
	additem=(e)=>{for (let index = 0; index < 1000000; index++) {
		e.preventDefault();
		let paragraph=document.createElement('p');
		document.getElementById('task').appendChild(paragraph);
		paragraph.innerHTML=this.state.inputvalue;
	}

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
					<P>nothing</P>
					<input onClick={this.additem} type="submit" value="submit form" />
				</form>
				<div id="task"></div>
			</div>
	)
}
}
export default RealApp;
