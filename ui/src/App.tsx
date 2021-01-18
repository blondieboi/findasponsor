import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

function App() {
	return (
		<Router>
			<div className='App'>
				<Switch>
					<Route path='/register'>
						<Register />
					</Route>
					<Route path='/login'>
						<Login />
					</Route>
					<Route path='/authhome'>
						<Login />
					</Route>
					<Route path='/'>
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
