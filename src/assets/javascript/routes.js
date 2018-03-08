import React from 'react';
import { BrowserRouter, Switch, Route, browserHistory } from 'react-router-dom';
import SignInContainer from '../../pages/SignIn/SignInContainer';
import Library from '../../pages/Library';
import NotFound from '../../pages/NotFound/NotFound';

export default () => (
  <BrowserRouter history={browserHistory}>
    <Switch>
      <Route exact path="/" component={SignInContainer} />
      <Route path="/signin" component={SignInContainer} />
      <Route path="/signup" render={() => <div>Vinyl - Sign Up </div>} />
      <Route path="/forgot-password" render={() => <div>Vinyl - Forgot Password </div>} />
      <Route path="/library" component={Library} />
      <Route path="/wishlist" render={() => <div>Vinyl - Wishlist </div>} />
      <Route path="/add-vinyl" render={() => <div>Vinyl - Add</div>} />
      <Route path="/edit-vinyl/:id" render={() => <div>Vinyl - Edit</div>} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
