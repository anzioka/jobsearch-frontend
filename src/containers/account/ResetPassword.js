import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

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
    width: '500px',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  form: {
    marginTop: theme.spacing(3),
    width: '100%',
  },
}));

const ResetPassword = () => {
  const classes = useStyles();

  // TODO: add link to home page in toolbar
  return (
    <Paper elevation={0}>
      <Toolbar />
      <Divider />
      <Container component="main" className={classes.main}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h4" gutterBottom>
            Reset Password
          </Typography>
          <Typography component="h6" align="center">
            Enter your account&apos;s email address and we will send you a password reset link.
          </Typography>
          <form className={classes.form}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Email Address"
                    name="email" />
              </Grid>
              <Grid item xs={12}>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    className={classes.submit}>
                  Reset Password
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </Paper>
  );
};

export default ResetPassword;
