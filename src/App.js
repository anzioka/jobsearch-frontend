import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { CssBaseline } from '@material-ui/core';
import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import * as Routes from './constants/Routes';
import RegisterCompany from './containers/company/RegisterCompany';
import { Login, ResetPassword, SignUp } from './containers/account';
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
          <Route path={Routes.ENROLL} component={RegisterCompany} />
          <Redirect to={Routes.LOGIN} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
