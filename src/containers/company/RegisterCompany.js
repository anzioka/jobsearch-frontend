import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import LogoPicker from './LogoPicker';

import sizeRanges from '../../utils/EmployeeSizeRange';
import industries from '../../constants/Industries';

const useStyles = makeStyles((theme) => ({
  card: {
    width: '500px',
    textAlign: 'center'
  },
  main: {
    paddingTop: theme.spacing(4),
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.default
  },
  container: {
    display: 'flex',
    justifyContent: 'center'
  },
  form: {
    marginTop: theme.spacing(3)
  },
  submit: {
    marginTop: theme.spacing(3)
  }
}));

const RegisterCompany = () => {
  const classes = useStyles();

  const [employeeSize, setEmployeeSize] = useState();
  const [logoBase64Str, setLogoBase64Str] = useState();

  const handleSelectEmployeeSize = (value) => {
    setEmployeeSize(value);
  };

  return (
    <Paper elevation={0}>
      <Toolbar />
      <Divider />
      <Paper elevation={0} className={classes.main}>
        <Container className={classes.container}>
          <Card className={classes.card}>
            <CardContent>
              <Typography component="h1" variant="h4" gutterBottom>
                Register Company
              </Typography>
              <form autoComplete="off" className={classes.form}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                        fullWidth
                        name="name"
                        variant="outlined"
                        autoFocus
                        required
                        label="Name of Company" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        name="description"
                        required
                        multiline
                        rows={4}
                        label="Description" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                        fullWidth
                        name="website"
                        variant="outlined"
                        label="Website" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                        fullWidth
                        name="location"
                        variant="outlined"
                        label="Location" />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl variant="outlined" fullWidth>
                      <InputLabel id="industry"> Industry </InputLabel>
                      <Select
                          labelId="industry"
                          label="Industry"
                          fullWidth>
                        {
                          industries.map((item, index) => (
                            <MenuItem key={index} value={item}>
                              { item }
                            </MenuItem>
                          ))
                        }
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl variant="outlined" fullWidth>
                      <InputLabel id="employee-size"> Employee size </InputLabel>
                      <Select
                          labelId="employee-size"
                          label="Employee Size"
                          value={employeeSize}
                          onChange={handleSelectEmployeeSize}
                          fullWidth>
                        {
                          sizeRanges.map((range, index) => (
                            <MenuItem key={index} value={range.toString()}>
                              { range.toString() }
                            </MenuItem>
                          ))
                        }
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <LogoPicker
                        logoBase64Str={logoBase64Str}
                        handleOnSelectImg={(base64Str) => setLogoBase64Str(base64Str)} />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                        className={classes.submit}
                        fullWidth
                        variant="contained"
                        color="primary"
                        size="large">
                      Save Details
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Container>
      </Paper>

    </Paper>
  );
};

export default RegisterCompany;
