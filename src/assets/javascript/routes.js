import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../../pages/Login/Login.js';
import LibraryContainer from '../../pages/Library/LibraryContainer.js';
import NotFound from '../../pages/NotFound/NotFound.js';

export default () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Login} />
				<Route path='/login' component={Login} />
				<Route path='/library' component={LibraryContainer} />
				<Route path="/wishlist" render={() => <div>Vinyl - Wishlist </div>} />
				<Route path="/add-vinyl" render={() => <div>Vinyl - Add</div>} />
				<Route path="/edit-vinyl:id" render={() => <div>Vinyl - Edit</div>} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	)
};