import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { setStorage } from 'app/utils/services/session.storage'
import Routes from './Routes'

import '../../node_modules/font-awesome/scss/font-awesome.scss';

const App = () => {

  setStorage('app-title', 'Crypto');

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
