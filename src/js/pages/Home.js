import React from 'react';
import {Helmet} from "react-helmet";

import Header from '../layout/Header.js';
import Listrepo from '../components/List.js';





export default class Home extends React.Component {
	render() {
		return (
			<div>
				<Listrepo/>
			</div>
		);
	}
}

