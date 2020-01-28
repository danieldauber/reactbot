import React from 'react';
import { Router } from 'react-router-dom';

import './config/reactotronConfig';

import Routes from './routes';
import GlobalStyles from './styles/global';
import history from './services/history';

function App() {
  return (
    <Router history={history}>
      <GlobalStyles />
      <Routes />
    </Router>
  );
}

export default App;
