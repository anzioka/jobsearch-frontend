import React, { useReducer } from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import DispatchContext from './DispatchContext';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import SelectDegree from './SelectDegree';
import SelectMonthYear from './SelectMonthYear';
import SelectSchool from './SelectSchool';
import SelectStudyField from './SelectStudyField';
import StateContext from './StateContext';
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
  root: {
    backgroundColor: theme.palette.background.default
  },
  saveBtn: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
}));

const initialState = {
  school: {
    error: '',
    value: undefined
  },
  degree: {
    error: '',
    value: undefined
  },
  fieldOfStudy: {
    error: '',
    value: undefined
  },
  startMonth: {
    error: '',
    value: ''
  },
  startYear: {
    error: '',
    value: ''
  },
  endMonth: {
    error: '',
    value: ''
  },
  endYear: {
    error: '',
    value: ''
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'setStartMonth':
      return { ...state, startMonth: { ...state.startMonth, value: action.payload } };
    case 'setStartMonthError':
      return { ...state, startMonth: { ...state.startMonth, error: action.payload } };
    case 'setStartYear':
      return { ...state, startYear: { ...state.startYear, value: action.payload } };
    case 'setStartYearError':
      return { ...state, startYear: { ...state.startYear, error: action.payload } };
    case 'setEndMonth':
      return { ...state, endMonth: { ...state.endMonth, value: action.payload } };
    case 'setEndMonthError':
      return { ...state, endMonth: { ...state.endMonth, error: action.payload } };
    case 'setEndYear':
      return { ...state, endYear: { ...state.endYear, value: action.payload } };
    case 'setEndYearError':
      return { ...state, endYear: { ...state.endYear, error: action.payload } };
    case 'setDegree':
      return { ...state, degree: { ...state.degree, value: action.payload } };
    case 'setDegreeError':
      return { ...state, degree: { ...state.degree, error: action.payload } };
    case 'setStudyField':
      return { ...state, fieldOfStudy: { ...state.fieldOfStudy, value: action.payload } };
    case 'setStudyFieldError':
      return { ...state, fieldOfStudy: { ...state.fieldOfStudy, error: action.payload } };
    case 'setSchool':
      return { ...state, school: { ...state.school, value: action.payload } };
    case 'setSchoolError':
      return { ...state, school: { ...state.school, error: action.payload } };
    default:
      throw new Error();
  }
};

const EditEducationItem = ({ handleOnAddItem }) => {
  const classes = useStyles();

  const [state, dispatch] = useReducer(reducer, initialState);
  // const [degree, setDegree] = useState(DEGREES[0]);
  // const [field, setField] = useState(FIELDS_OF_STUDY[0]);

  const validateInput = () => {
    let degreeError = '';
    let schoolError = '';
    const startYearError = '';
    let endYearError = '';
    let startMonthError = '';
    let endMonthError = '';
    let fieldOfStudyError = '';

    if (!state.degree.value) {
      degreeError = 'Please select degree';
    }
    if (!state.school.value) {
      schoolError = 'Please select school';
    }
    if (!state.fieldOfStudy.value) {
      fieldOfStudyError = 'Please select field of study';
    }

    if (!state.startMonth.value) {
      startMonthError = 'Please select start month';
    }

    if (!state.endMonth.value) {
      endMonthError = 'Please select start month';
    }

    if (!state.endYear.value) {
      endYearError = 'Please select end year';
    }

    dispatch({ type: 'setDegreeError', payload: degreeError });
    dispatch({ type: 'setSchoolError', payload: schoolError });
    dispatch({ type: 'setStartYearError', payload: startYearError });
    dispatch({ type: 'setEndYearError', payload: endYearError });
    dispatch({ type: 'setStartMonthError', payload: startMonthError });
    dispatch({ type: 'setEndMonthError', payload: endMonthError });
    dispatch({ type: 'setStudyFieldError', payload: fieldOfStudyError });

    return !(degreeError || schoolError || startYearError || endYearError
      || startMonthError || endMonthError || fieldOfStudyError);
  };

  const handleOnSave = () => {
    const valid = validateInput();
    if (valid) {
      handleOnAddItem(state);
    }
  };

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <Paper className={classes.root} elevation={0}>
          <Box p={3}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <SelectSchool schoolError={state.school.error} />
              </Grid>
              <Grid item xs={6}>
                <SelectDegree degreeError={state.degree.error} />
              </Grid>
              <Grid item xs={6}>
                <SelectStudyField fieldOfStudyError={state.fieldOfStudy.error} />
              </Grid>
              <Grid item xs={12}>
                <SelectMonthYear
                    label="Start date"
                    month={state.startMonth.value}
                    year={state.startYear.value}
                    monthError={state.startMonth.error}
                    yearError={state.startYear.error}
                    onSetMonth={(value) => dispatch({ type: 'setStartMonth', payload: value })}
                    onSetYear={(value) => dispatch({ type: 'setStartYear', payload: value })} />
              </Grid>
              <Grid item xs={12}>
                <SelectMonthYear
                    label="End date"
                    month={state.endMonth.value}
                    year={state.endYear.value}
                    monthError={state.endMonth.error}
                    yearError={state.endYear.error}
                    onSetMonth={(value) => dispatch({ type: 'setEndMonth', payload: value })}
                    onSetYear={(value) => dispatch({ type: 'setEndYear', payload: value })} />
              </Grid>
              <Grid item xs={6}>
                <Button onClick={handleOnSave} variant="outlined" color="primary">
                  Save Details
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};

EditEducationItem.propTypes = {
  handleOnAddItem: PropTypes.func.isRequired
};

export default EditEducationItem;
