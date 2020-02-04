/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components of Routes
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import FAQpage from 'containers/FAQ/index';

// Styles
import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/FAQ" component={FAQpage} />
        <Route component={NotFoundPage} />
        <Route component={NotFoundPage} />

      </Switch>
      <GlobalStyle />
    </div>
  );
}
