import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'
import '../../node_modules/font-awesome/scss/font-awesome.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
