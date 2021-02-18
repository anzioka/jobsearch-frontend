import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import * as Routes from '../../constants/Routes';

const useStyles = makeStyles((theme) => ({
  main: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.secondary,
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // coomment this out to move to top
    alignItems: 'center',
    minHeight: 'calc(100vh - 64px)',
    maxWidth: '500px',
    margin: '0 16px',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  form: {
    marginTop: theme.spacing(3),
  },
  section: {
    // padding: '64px'
  },
}));

const Login = () => {
  const classes = useStyles();

  // TODO: add home link in the toolbar

  return (
    <Paper elevation={0}>
      <Toolbar> </Toolbar>
      <Divider />
      <Container component="main" className={classes.main}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h4" gutterBottom>
            Sign In
          </Typography>
          <Link href={Routes.SIGNUP} variant="body1">
            Don&apos;t have an account? Sign up
          </Link>

          <form className={classes.form}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                    autoComplete="email"
                    name="email"
                    variant="outlined"
                    required
                    fullWidth
                    label="Email"
                    type="email" />
              </Grid>

              <Grid item xs={12}>
                <TextField
                    name="password"
                    variant="outlined"
                    required
                    fullWidth
                    label="Password"
                    type="password" />
              </Grid>
              <Grid item xs={12}>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}>
                  Login
                </Button>
              </Grid>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link variant="body2" href={Routes.RESET}>
                    Forgot your password? Reset password
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </Paper>
  );
};

export default Login;
