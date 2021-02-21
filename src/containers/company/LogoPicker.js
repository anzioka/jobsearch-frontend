import React from 'react';
import Paper from '@material-ui/core/Paper';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4)
  },
  logo: {
    maxWidth: '120px',
    width: '100%',
    height: 'auto',
  },
  input: {
    display: 'none'
  },
  uploadbutton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  }
}));

const LogoPicker = ({ logoBase64Str, handleOnSelectImg }) => {
  const classes = useStyles();

  /* eslint-disable react-hooks/exhaustive-deps */
  const onDrop = React.useCallback((files) => {
    const reader = new FileReader();
    reader.onabort = () => {
      handleOnSelectImg(undefined);
    };
    reader.onerror = () => {
      handleOnSelectImg(undefined);
    };

    reader.onload = () => {
      const binaryStr = reader.result;
      handleOnSelectImg(binaryStr);
    };
    reader.readAsDataURL(files[0]);
  }, []);
  /* eslint-enable */

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*' });

  return (
    <Paper variant="outlined" className={classes.root}>
      <Grid container spacing={2}>
        {
          logoBase64Str && (
            <Grid item xs={6}>
              <img alt="logo" src={logoBase64Str} className={classes.logo} />
            </Grid>
          )
        }
        <Grid item xs={logoBase64Str ? 6 : 12}>
          <div {...getRootProps()} className={classes.uploadbutton}>
            <input
                {...getInputProps()}
                className={classes.input} />
            {/* eslint jsx-a11y/label-has-associated-control: ["error", { assert: "either" } ] */}

            <label htmlFor="upload">
              <Button
                  component="span"
                  variant="contained"
                  color="default"
                  startIcon={<CloudUploadIcon />}>
                Upload Logo
              </Button>
            </label>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

LogoPicker.propTypes = {
  logoBase64Str: PropTypes.string,
  handleOnSelectImg: PropTypes.func.isRequired
};

LogoPicker.defaultProps = {
  logoBase64Str: undefined
};

export default LogoPicker;
