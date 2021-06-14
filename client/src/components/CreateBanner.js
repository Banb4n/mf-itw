import React from 'react';
import { Paper, Typography, TextField, Button } from '@material-ui/core';
import styled from 'styled-components';

import createPlaybook from '../actions/createPlaybook';

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 8px;
  opacity: ${({isLoading}) => !!isLoading ? 0.5 : 1};
`;

const CreateBanner = () => {
  const [name, setName] = React.useState('');
  const [content, setContent] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const onCreatePlaybook = async () => {
    setLoading(true);
    await createPlaybook(name, content);
    setLoading(false);
  }

  return (
    <Paper 
      style={{
        width: '75%',
        margin: '16px',
        padding: '16px',
      }} 
      elevation={3}
    >
      <Typography variant="h5">Create PlayBook</Typography>

      <Form noValidate autoComplete="off" isLoading={loading}>
        <TextField 
          id="playbook-name" 
          label="Name" 
          variant="filled" 
          style={{ width: '100%', margin: 4 }} 
          value={name} onChange={e => setName(e.target.value)} 
        />
        <TextField 
          id="playbook-content"
          label="Step (JSON)"
          variant="filled"
          placeholder={`
          [{
            "name": string;
            "type": 'handler', 'custom', 'action', 'mail';
            "action": string;
            "order": Number;
            "callback": string;
          }]
          `}
          multiline 
          rows={8} 
          style={{ width: '100%', margin: 4 }} 
          value={content} 
          onChange={e => setContent(e.target.value)} 
        />
        <Button 
          style={{ width: '100%', margin: 4 }} 
          variant="contained" 
          color="primary"
          disabled={(!name && !content) || loading}
          onClick={onCreatePlaybook}
        >
          Create
        </Button>
      </Form>
    </Paper>
  );
}

export default CreateBanner;