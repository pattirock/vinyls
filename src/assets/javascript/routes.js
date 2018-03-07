import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../../pages/Login/Login.js';

export default () => {
	return (
		<BrowserRouter>
			<Switch>
			<Route exact path='/' component={Login} />
			<Route path='/login' component={Login} />
			<Route path="/vinyl/library" render={() => <div>Vinyl - Library</div>} />
			<Route path="/vinyl/wishlist" render={() => <div>Vinyl - Wishlist </div>} />
			<Route path="/vinyl/add" render={() => <div>Vinyl - Add</div>} />
			<Route path="/vinyl/edit:id" render={() => <div>Vinyl - Edit</div>} />
			</Switch>
		</BrowserRouter>
	)
};