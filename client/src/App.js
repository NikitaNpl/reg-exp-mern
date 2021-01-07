import React from 'react';
import { Route } from 'react-router-dom';

import { Header } from './components';
import { Home, Account } from './pages';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/account" component={Account} />
    </div>
  );
}

export default App;
