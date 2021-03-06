// npm packages
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
// styles
import 'bootstrap/dist/css/bootstrap.min.css';

// our packages
import App from './containers/App';
import {requireAuth} from './util';
import store from './store';

// our pages
import Home from './containers/HomePage';
import Login from './Auth/LoginPage';
import Profile from './containers/ProfilePage';
import NotFound from './components/NotFoundPage';

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

// render on page
ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} onEnter={requireAuth} />
        <Route path="login" component={Login} />
        <Route path="profile" component={Profile} onEnter={requireAuth} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
