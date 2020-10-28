import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const compStyles = makeStyles((theme) => ({
  root: {
    fontSize: 24,
    color: 'blue',
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
    }
  }
}));

const MuiComponent = () => {
  const classes = compStyles();
  return (
    <div className={classes.root}>
      Hey Man
    </div>
  )
}

export default MuiComponent;