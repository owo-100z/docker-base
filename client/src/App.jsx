import React from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import routes from '~react-pages';

const AppRoutes = () => {
  return useRoutes(routes);
};

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;