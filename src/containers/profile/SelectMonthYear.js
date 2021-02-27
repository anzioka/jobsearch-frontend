import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

import PropTypes from 'prop-types';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const generateYearsList = () => {
  const result = [];
  let year = new Date().getFullYear() + 1;

  for (let i = 0; i < 70; i += 1) {
    year -= 1;
    result.push(year);
  }
  return result.sort((a, b) => b - a).map((a) => a.toString());
};

const SelectMonthYear = ({
  label,
  month,
  monthError,
  onSetMonth,
  onSetYear,
  year,
  yearError,
}) => {
  const handleChange = (event) => {
    const { target } = event;
    const { value, name } = target;

    if (name === 'month') onSetMonth(value);
    if (name === 'year') onSetYear(value);
  };

  const yearList = generateYearsList();

  const unique = new Set();
  yearList.forEach((item) => {
    if (unique.has(item)) {
      console.log(item);
    } else {
      unique.add(item);
    }
  });

  const isYearError = yearError.length !== 0;
  const isMonthError = monthError.length !== 0;

  return (
    <div>
      <Typography variant="subtitle1">
        { label }
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <FormControl fullWidth variant="outlined" error={isMonthError}>
            <InputLabel> Month </InputLabel>
            <Select
                onChange={handleChange}
                value={month}
                label="Month"
                inputProps={{
                  name: 'month'
                }}>
              {
                months.map((item) => (
                  <MenuItem key={item} value={item}>
                    { item }
                  </MenuItem>
                ))
              }
            </Select>
            {
              isMonthError && (
                <FormHelperText>
                  { monthError }
                </FormHelperText>
              )
            }
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth variant="outlined" error={isYearError}>
            <InputLabel> Year </InputLabel>
            <Select
                onChange={handleChange}
                value={year}
                label="Year"
                inputProps={{
                  name: 'year',
                }}>
              {
                yearList.map((item) => (
                  <MenuItem key={item} value={item}>
                    { item }
                  </MenuItem>
                ))
              }
            </Select>
            {
              isYearError && (
                <FormHelperText>
                  { yearError }
                </FormHelperText>
              )
            }
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};

SelectMonthYear.propTypes = {
  label: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  onSetMonth: PropTypes.func.isRequired,
  onSetYear: PropTypes.func.isRequired,
  monthError: PropTypes.string.isRequired,
  yearError: PropTypes.string.isRequired,
};

export default SelectMonthYear;
