import React from 'react';

import { Link, Route, Switch, Redirect, } from 'react-router-dom';

import Creation from "./Create/index";

function Account() {
  console.log('account')
  return (
    <div className="container">
      <div className="categories">
        <div className="categories__list">
          <ul>
            <Link to="/account/create" className="border-gray active">Создать</Link>
            <Link to="/account/favorites" className="border-gray">Избранное</Link>
            <Link to="/account/viewed" className="border-gray">Просмотренное</Link>
          </ul>
        </div>
      </div>
      <Switch>
        <Route
          path={`/account/create`}
          render={props => <Creation {...props} />}
        />
      </Switch>
    </div>
  )
}

export default Account;
