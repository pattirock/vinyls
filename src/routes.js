import React from 'react';
// import { Route } from 'react-router';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignInPage from './pages/SignIn/SignIn';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignInPage} />
      <Route path="/login" component={SignInPage} />
      <Route path="/vinyl/library" render={() => <div>Vinyl - Library</div>} />
      <Route path="/vinyl/wishlist" render={() => <div>Vinyl - Wishlist </div>} />
      <Route path="/vinyl/add" render={() => <div>Vinyl - Add</div>} />
      <Route path="/vinyl/edit:id" render={() => <div>Vinyl - Edit</div>} />
    </Switch>
  </BrowserRouter>
);
