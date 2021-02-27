import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';

import PropTypes from 'prop-types';
import DispatchContext from './DispatchContext';

const FIELDS_OF_STUDY = [
  { name: 'Chemical Engineering' },
  { name: 'Civil Engineering' },
  { name: 'Computer Engineering' },
  { name: 'Computer Science' },
  { name: 'Criminal Justice and Corrections' },
];
const filter = createFilterOptions();

const SelectStudyField = ({ fieldOfStudyError }) => {
  const [value, setValue] = useState(null);

  const dispatch = React.useContext(DispatchContext);

  return (
    <FormControl fullWidth error={fieldOfStudyError.length !== 0}>
      <Typography variant="subtitle1">
        Field of Study
      </Typography>

      <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            let fieldName;

            if (typeof newValue === 'string') {
              fieldName = newValue;
              setValue({
                name: newValue
              });
            } else if (newValue && newValue.inputValue) {
              // create new value from user input
              fieldName = newValue.inputValue;
              setValue({
                name: newValue.inputValue
              });
            } else {
              fieldName = newValue?.name;
              setValue(newValue);
            }
            dispatch({ type: 'setStudyField', payload: fieldName });
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
          options={FIELDS_OF_STUDY}
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
                placeholder="Field of Study"
                variant="outlined"
                {...params} />
          )} />
      {
        fieldOfStudyError && (
          <FormHelperText>
            { fieldOfStudyError }
          </FormHelperText>
        )
      }
    </FormControl>

  );
};

SelectStudyField.propTypes = {
  fieldOfStudyError: PropTypes.string.isRequired
};

export default SelectStudyField;
