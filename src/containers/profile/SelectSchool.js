import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import FormHelperText from '@material-ui/core/FormHelperText';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';

import PropTypes from 'prop-types';
import DispatchContext from './DispatchContext';

const useStyles = makeStyles((theme) => ({
  img: {
    height: 'auto',
    width: '100%',
    maxWidth: '40px',
    marginRight: theme.spacing(2)
  }
}));

const SCHOOLS = [
  { name: 'Stanford University', logo: 'https://www.4icu.org/i/logos-seals/5135.png' },
  { name: 'Machakos University', logo: 'https://www.4icu.org/i/logos-seals/17706.png' }
];
const filter = createFilterOptions();

const SelectSchool = ({ schoolError }) => {
  const [value, setValue] = useState(null);
  const classes = useStyles();

  const dispatch = React.useContext(DispatchContext);

  return (
    <FormControl fullWidth error={schoolError.length !== 0}>
      <Typography variant="subtitle1">
        School
      </Typography>

      <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            let schoolName;

            if (typeof newValue === 'string') {
              schoolName = newValue;
              setValue({
                name: newValue
              });
            } else if (newValue && newValue.inputValue) {
              // create new value from user input
              schoolName = newValue.inputValue;
              setValue({
                name: newValue.inputValue
              });
            } else {
              schoolName = newValue?.name;
              setValue(newValue);
            }
            dispatch({ type: 'setSchool', payload: schoolName });
          }}
          filterOptions={(options, params) => {
            const filtered = filter(options, params);
            // suggest creation of a new value
            if (params.inputValue !== '') {
              filtered.push({
                inputValue: params.inputValue,
                name: `Add "${params.inputValue}"`
              });
            } else {
              // return [];
            }

            return filtered;
          }}
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          options={SCHOOLS}
          getOptionLabel={(option) => {
            // Value selected with enter, right from the input
            if (typeof option === 'string') {
              return option;
            }
            // Add "xxx" option created dynamically
            if (option.inputValue) {
              return option.inputValue;
            }
            // Regular option
            return option.name;
          }}
          renderOption={(option) => (
            <>
              <span>
                <img className={classes.img} src={option.logo} loading="lazy" alt="" />
              </span>
              {option.name}
            </>
          )}
          freeSolo
          renderInput={(params) => (
            <TextField
                placeholder="school"
                variant="outlined"
                {...params} />
          )} />
      {
        schoolError && (
          <FormHelperText>
            { schoolError }
          </FormHelperText>
        )
      }
    </FormControl>

  );
};

SelectSchool.propTypes = {
  schoolError: PropTypes.string.isRequired
};

export default SelectSchool;
