import React from 'react';
import { Paper, Typography } from '@material-ui/core';

const PlaybooksListing = (props) => {
  const { } = props;

  return (
    <Paper style={{
      width: '100%',
      margin: '16px',
      padding: '16px',
    }} elevation={3}>
      <Typography variant="h5">Your PlayBooks</Typography>
      
    </Paper>
  );
}

export default PlaybooksListing;