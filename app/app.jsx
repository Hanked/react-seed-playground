import './favicon.ico';
import './index.html';
import 'babel-core/polyfill';
import 'normalize.css/normalize.css';
import './scss/app.scss';

import React from 'react';
import App from './components/App/App';
import Auth from './components/Auth/Auth';
import Dash from './components/Dash/Dash';
import Foo from './components/Foo/Foo';
import ModalTrigger from './components/ModalTrigger/ModalTrigger';
import { Router, Route, Link } from 'react-router'

React.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="auth" component={Auth}>
        <Route path="foo/:id" component={Foo} />
      </Route>
      <Route path="dash" component={Dash}>
        <Route path="foo/:id" component={Foo} />
      </Route>
    </Route>
  </Router>
), document.body)
