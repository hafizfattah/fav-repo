import css from './style.scss';

import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, browserHistory} from 'react-router';

import Home from './js/pages/Home.js';
import About from './js/pages/About.js';




import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'



const app = document.getElementById('app');
class App extends React.Component{
	render(){
		return(
			<Router>
				<div className="site-wrapper">
						<Route exact path="/" component={Home}/>
						<Route path="/home" component={Home}/>
						<Route path="/about" component={About}/>
				</div>
	 		</Router>
		);
	}

	
}


ReactDOM.render(<App/>, app);


