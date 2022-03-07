
import './App.css';
import { Employees } from './components/Employees';
import { Jobs } from './components/Jobs';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function App() {

  const classes = useStyles();
  // const theme = useTheme();


  return (
    <div className={classes.root}>
      <Jobs />
      <main className={classes.content}>
        <div className={classes.toolbar} />
         <Employees />
      </main>
     
    </div>
  );
}

export default App;
