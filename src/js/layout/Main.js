import React from 'react';

export default class Main extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.content}</h1>
			</div>
		)
	}
}

