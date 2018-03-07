import React from 'react';  
// import { Route } from 'react-router';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/Login';

export default () => {
	return (
		<BrowserRouter>
			<Switch>
			<Route exact path='/' component={LoginPage}/>
			<Route path='/login' component={LoginPage}/>
			<Route path="/vinyl/library" render={() => <div>Vinyl - Library</div>} />
			<Route path="/vinyl/wishlist" render={() => <div>Vinyl - Wishlist </div>} />
			<Route path="/vinyl/add" render={() => <div>Vinyl - Add</div>} />
			<Route path="/vinyl/edit:id" render={() => <div>Vinyl - Edit</div>} />
			</Switch>
		</BrowserRouter>
	)
};