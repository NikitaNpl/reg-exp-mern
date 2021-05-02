import React from 'react';
import { Route, Switch } from 'react-router-dom';

import axios from 'axios';

import { Header, GitHubAuth } from './components';
import { Home, Account } from './pages';

// const GitHubAuth = () => {
//   const code = new URLSearchParams(window.location.search).get('code');
//   const redirect = code ?
//     axios
//       .get(`/oauth-callback?code=${code}`)
//       .then(({data}) => {
//         console.log(data.redirect)
//         window.location.replace(data.redirect)
//       })
//     : "";
//   return 1;
// }

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Switch >
        <Route exact path="/" component={Home} />
        <Route path="/account" component={Account} />
        <Route path="/oauth-callback/" component={GitHubAuth} />
      </Switch>
    </div>
  );
}

export default App;
