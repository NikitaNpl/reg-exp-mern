import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Header, GitHubAuth, GitHubAuth2 } from './components';
import { Home, Account } from './pages';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Switch >
        <Route exact path="/" component={Home} />
        <Route path="/account" component={Account} />
        <Route path="/oauth-callback" component={GitHubAuth} />
        <Route path="/github-auth" component={GitHubAuth2} />
      </Switch>
    </div>
  );
}

export default App;
