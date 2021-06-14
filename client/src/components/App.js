import React from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';

import CreateBanner from './CreateBanner';
import PlaybooksListing from './PlaybooksListing';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const ButtonAppBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Playbooks
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}


const MainContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

const BlocksWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <MainContainer>
          <ButtonAppBar />
          <BlocksWrapper>
            <CreateBanner />
            <PlaybooksListing />
          </BlocksWrapper>
        </MainContainer>
      </ChakraProvider>
    </div>
  );
}

export default App;
