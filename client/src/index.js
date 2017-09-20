import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './components/app';
import reducers from './reducers';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import ListItem from './components/list/new-list-item';
import Signout from './components/auth/signout';

let createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
			<Router history={browserHistory}>
				<Route path="/" component={App}>
					<Route path="signin" component={Signin} />
					<Route path="signout" component={Signout} />
					<Route path="signup" component={Signup} />
					<Route path="newItem" component={ListItem} />
				</Route>
			</Router>
		</Provider>
		, document.querySelector('.container'));