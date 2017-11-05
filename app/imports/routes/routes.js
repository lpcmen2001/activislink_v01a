import  { Meteor } from 'meteor/meteor';
import React  from 'react';
import { Router, Switch, Route, withRouter } from 'react-router';
import createHistory from 'history/createBrowserHistory'

import Signup from '../ui/Signup';
import Link from '../ui/Link';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';

const history = createHistory();

const unauthenticatedPages = ['/','/signup'];
const authenticatedPages = ['/links']
let isUnauthenticatedPage = true;
let isAuthenticatedPage = false;

const ChangeTracker = withRouter(({match, location, history}) => {
    const pathName = location.pathname;
    isUnauthenticatedPage = unauthenticatedPages.includes(pathName);
    isAuthenticatedPage = authenticatedPages.includes(pathName);
    
    return false;
});

export const onAuthChange = (isAuthenticated) => {
    if (isAuthenticated){
      if (isUnauthenticatedPage){
        history.replace('/links');
      }
    }else{
      if (isAuthenticatedPage) {
        history.replace('/');
      }
    }
};

export const routes = (
  <Router history={history}>
    <div>
    <Switch>
    <Route exact path="/" component={Login}/>
    <Route path="/signup" component={Signup}/>
    <Route path="/links" component={Link} />
    <Route component={NotFound}/>
    </Switch>
    <ChangeTracker/>
    </div>
  </Router>
);