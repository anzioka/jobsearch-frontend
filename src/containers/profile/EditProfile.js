import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

import Bio from './Bio';
import Education from './Education';

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: theme.palette.background.default
  },
  header: {
    backgroundColor: theme.palette.primary.main,
    padding: '64px 0',
    [theme.breakpoints.down('sm')]: {
      padding: '64px 0'
    },
  },
  headerText: {
    color: 'white'
  },
  tabs: {
    backgroundColor: theme.palette.background.default
  },
  tabPanel: {
    padding: theme.spacing(3)
  }
}));

const TabPanel = ({
  children,
  value,
  index,
  ...other
}) => (
  <div
      role="tabpanel"
      hidden={value !== index}
      {...other}>
    {
      value === index && (
        <Box>
          <div>
            {children}
          </div>
        </Box>
      )
    }
  </div>
);

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired
};

const EditProfile = () => {
  const classes = useStyles();
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event, newVal) => {
    setTabIndex(newVal);
  };

  return (
    <Paper elevation={0}>
      <Toolbar />
      <div elevation={0} className={classes.header}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Typography variant="h3" className={classes.headerText} gutterBottom>
                Edit Profile
              </Typography>
              <Typography variant="h6" className={classes.headerText}>
                Let&apos;s customize your profile to attract employers
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Button disableElevation variant="contained">
                Preview Profile
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.tabs}>
        <Container>
          <AppBar position="static" color="default">
            <Tabs
                value={tabIndex}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto">
              <Tab label="Bio" />
              <Tab label="Education" />
              <Tab label="Work Experience" />
              <Tab label="Resume" />
              <Tab label="Projects" />
              <Tab label="Skills" />
              <Tab label="Preferences" />
            </Tabs>
          </AppBar>
          <TabPanel value={tabIndex} index={0}>
            <Paper className={classes.tabPanel}>
              <Bio />
            </Paper>
          </TabPanel>
          <TabPanel value={tabIndex} index={1}>
            <Paper className={classes.tabPanel}>
              <Education />
            </Paper>
          </TabPanel>
          <TabPanel value={tabIndex} index={2}>
            <div> What </div>
          </TabPanel>
          <TabPanel value={tabIndex} index={3}>
            Resume
          </TabPanel>
          <TabPanel value={tabIndex} index={4}>
            Projects
          </TabPanel>
          <TabPanel value={tabIndex} index={5}>
            Skills
          </TabPanel>
          <TabPanel value={tabIndex} index={6}>
            Preferences
          </TabPanel>
        </Container>
      </div>
    </Paper>
  );
};

export default EditProfile;
