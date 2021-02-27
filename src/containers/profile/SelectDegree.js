import React, { useState, useContext } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';

import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';

import PropTypes from 'prop-types';

import DispatchContext from './DispatchContext';

const DEGREE_OPTIONS = [
  { name: "Associate's Degree" },
  { name: 'Bachelor of Arts (BA)' },
  { name: 'Bachelor of Business Administration (BBA)' },
  { name: 'Bachelor of Engineering (BEng)' },
  { name: 'Bachelor of Fine Arts (BFA)' },
  { name: 'Bachelor of Science (BS)' }
];
const filter = createFilterOptions();

const SelectDegree = ({ degreeError }) => {
  const [value, setValue] = useState(null);

  const dispatch = useContext(DispatchContext);

  return (
    <FormControl fullWidth error={degreeError.length !== 0}>
      <Typography variant="subtitle1">
        Degree
      </Typography>

      <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            let degreeName;
            if (typeof newValue === 'string') {
              degreeName = newValue;
              setValue({
                name: newValue
              });
            } else if (newValue && newValue.inputValue) {
              // create new value from user input
              degreeName = newValue.inputValue;
              setValue({
                name: newValue.inputValue
              });
            } else {
              degreeName = newValue?.name;
              setValue(newValue);
            }
            dispatch({ type: 'setDegree', payload: degreeName });
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
          options={DEGREE_OPTIONS}
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
          renderOption={(option) => option.name}
          freeSolo
          renderInput={(params) => (
            <TextField
                placeholder="Degree"
                variant="outlined"
                {...params} />
          )} />
      {
        degreeError && (
          <FormHelperText>
            { degreeError }
          </FormHelperText>
        )
      }
    </FormControl>

  );
};

SelectDegree.propTypes = {
  degreeError: PropTypes.string.isRequired
};

export default SelectDegree;
