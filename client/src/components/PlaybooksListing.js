import React from 'react';
import { Paper, Typography } from '@material-ui/core';

const PlaybooksListing = (props) => {
  const { } = props;
  const [playbooks, setPlaybooks] = React.useState(null);

  React.useEffect(() => {
    fetch("/playbooks")
      .then((res) => {
        console.log({ res })
        res.json()
      })
      .then((data) => {
        console.log({ data });
        setPlaybooks(data)
      });
  }, []);

  console.log({ playbooks })

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