import React from 'react';

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import * as Routes from './constants/Routes';

import { SignUp, Login, ResetPassword } from './containers/account';

import theme from './theme';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Switch>
          <Route path={Routes.SIGNUP} component={SignUp} />
          <Route path={Routes.LOGIN} component={Login} />
          <Route path={Routes.RESET} component={ResetPassword} />
          <Redirect to={Routes.LOGIN} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
