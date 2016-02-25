// Repos.js

import React from 'react';
import { browserHistory } from 'react-router';

import NavLink from './NavLink';

export default class Repos extends React.Component {
	handleSubmit(event) {
		event.preventDefault();
		const repo = event.target.elements[0].value;
		const path = `/repo/${repo}`;
		browserHistory.push(path);
	}

	render() {
		return (
			<div>
				<h1>Repos</h1>
				<ul>
					<li>
						<NavLink to="/repo/facebook">Facebook</NavLink>
					</li>
					<li>
						<NavLink to="/repo/github">Github</NavLink>
					</li>
					<li>
						<form onSubmit={this.handleSubmit}>
							<input type="text" placeholder="repo" />
							<button type="submit">Go</button>
						</form>
					</li>
				</ul>
				{this.props.children}
			</div>
		);
	}
}
