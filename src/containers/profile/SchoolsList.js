import React from 'react';

import List from '@material-ui/core/List';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import SchoolIcon from '@material-ui/icons/School';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%'
  }
}));

const SchoolsList = ({ data }) => {
  const classes = useStyles();
  return (
    <div>
      <List>
        {
          data.map((item, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar>
                  <SchoolIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                  primary={item.school}
                  secondary={(
                    <>
                      <Typography
                          variant="body2"
                          color="colorPrimary">
                        {`${item.degree}, ${item.fieldOfStudy}`}
                      </Typography>
                      <Typography
                          variant="subtitle2"
                          color="colorPrimary">
                        {`${item.startMonth} ${item.startYear} - ${item.endMonth} ${item.endYear}`}
                      </Typography>
                    </>
                  )} />
              <ListItemSecondaryAction>
                <div>
                  <IconButton aria-label="edit">
                    <EditIcon />
                  </IconButton>

                  <IconButton aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </div>
              </ListItemSecondaryAction>
            </ListItem>
          ))
        }
      </List>
    </div>
  );
};

SchoolsList.propTypes = {
  data: PropTypes.any.isRequired
};

export default SchoolsList;
