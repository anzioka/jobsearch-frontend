import React, { useState } from 'react';

import AddIcon from '@material-ui/icons/Add';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import EditEducationItem from './EditEducationItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import SchoolsList from './SchoolsList';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

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

const Education = () => {
  const classes = useStyles();
  const [schools, setSchools] = useState([]);
  const [showEdit, setShowEdit] = useState(false);

  // LIST Education Items

  const handleOnAddItem = (item) => {
    const data = Object.keys(item).reduce((obj, key) => ({
      [key]: item[key].value,
      ...obj
    }), {});

    setSchools([...schools, data]);
    setShowEdit(false);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <SchoolsList data={schools} />
      </Grid>
      {
        showEdit && (
          <Grid item xs={12}>
            <EditEducationItem handleOnAddItem={handleOnAddItem} />
          </Grid>
        )
      }
      {
        !showEdit && (
          <Grid item xs={12}>
            <Button
                onClick={() => setShowEdit(true)}
                startIcon={<AddIcon />}
                color="primary">
              Add Education
            </Button>
          </Grid>
        )
      }
    </Grid>
  );
};

export default Education;
