/*
Copyright 2019 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import { hot } from 'react-hot-loader/root';
import { createBrowserHistory } from 'history';
import React from 'react';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import ThemeProvider from 'design/ThemeProvider';
import Dashboard from './components/Dashboard';

const browserHistory = createBrowserHistory();

function Force(): JSX.Element {
  return (
    <ThemeProvider>
      <Router history={browserHistory}>
        <Switch>
          <Route path="/" component={Dashboard} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default hot(Force);