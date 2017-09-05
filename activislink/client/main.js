import  { Meteor } from 'meteor/meteor';
import React  from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch } from 'react-router';
import { Route } from 'react-router';
import createHistory from 'history/createBrowserHistory'

import Signup from '../imports/ui/Signup';
import Link from '../imports/ui/Link';
import NotFound from '../imports/ui/NotFound';
import Login from '../imports/ui/Login';

const history = createHistory();

const routes = (
  <Router history={history}>
    <div>
    <Switch>
    <Route exact path="/" component={Login}/>
    <Route path="/signup" component={Signup}/>
    <Route path="/link" component={Link}/>
    <Route component={NotFound}/>
    </Switch>
    </div>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});