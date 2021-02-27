import React from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormHelperText from '@material-ui/core/FormHelperText';

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginRight: theme.spacing(2)
  },
  avatarWrapper: {
    display: 'flex',
    alignItems: 'center'
  },
}));

const Bio = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4">
          Alfonce Nzioka
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.avatarWrapper}>
        <Avatar className={classes.avatar}>
          A
        </Avatar>
        <Button
            variant="outlined"
            color="primary">
          Upload Photo
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="subtitle1">
          First Name
        </Typography>
        <FormControl fullWidth>
          <OutlinedInput
              required
              fullWidth
              placeholder="First Name" />
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <Typography variant="subtitle1">
          First Name
        </Typography>
        <FormControl fullWidth>
          <OutlinedInput
              fullWidth
              placeholder="Last Name" />
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <Typography variant="subtitle1">
          Phone Number
        </Typography>
        <FormControl fullWidth>
          <OutlinedInput
              fullWidth
              placeholder="Phone Number" />
          <FormHelperText>
            We will never share your phone number without consent
          </FormHelperText>
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <Typography variant="subtitle1">
          Email Address
        </Typography>
        <FormControl fullWidth>
          <OutlinedInput
              value="alfonce.starfish@gmail.com"
              disabled
              fullWidth
              placeholder="Email Address" />
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="subtitle1">
          Headline
        </Typography>
        <FormControl fullWidth>
          <OutlinedInput
              fullWidth
              placeholder="Software Engineer at X" />
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="subtitle1">
          About
        </Typography>
        <FormControl fullWidth>
          <OutlinedInput
              rows={5}
              multiline
              fullWidth
              placeholder="What are you interested in working on?" />
          <FormHelperText>
            Limit 200 words
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Button color="primary" variant="contained">
          Save Details
        </Button>
      </Grid>
    </Grid>
  );
};

export default Bio;
