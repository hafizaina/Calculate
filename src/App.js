import Calculator from './components/Calculator';
import Typography from "@material-ui/core/Typography";
import './App.css';
import React from 'react';


const App = () => {
  return (
    <React.Fragment>
      <Typography variant='h2'>Calculate.</Typography>
      <Calculator />
    </React.Fragment>
  );
}

export default App;
