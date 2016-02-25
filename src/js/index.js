// index.js

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import About from './components/About';
import Home from './components/Home';
import Repos from './components/Repos';
import Repo from './components/Repo';

render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="/about" component={About}></Route>
			<Route path="/repos" component={Repos}>
				<Route path="/repo/:repoName" component={Repo}></Route>
			</Route>
		</Route>
	</Router>
), document.getElementById('app'));
