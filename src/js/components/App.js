// App.js

import React from 'react';
import NavLink from './NavLink';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<nav>
					<NavLink to="/" onlyActiveOnIndex>Home</NavLink>
					<NavLink to="/about">About</NavLink>
					<NavLink to="/repos">Repos</NavLink>
				</nav>
				<h1>App</h1>
				{this.props.children}
			</div>
		);
	}
}
