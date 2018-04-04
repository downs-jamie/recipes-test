import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MyNavbar from './Navbar.js';
import LogIn from './LogIn.js';
import Home from './Home.js';
import './App.css';


class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<MyNavbar />
					<div className="pages">
						<Route exact path="/home" component={Home} />
						<Route exact path="/login" component={LogIn} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
