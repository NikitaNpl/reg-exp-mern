import React from 'react';
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Link, Route, Switch, } from 'react-router-dom';

import Creation from "./Create/index";

function Account() {
  const history = useHistory();
  let { account } = useSelector(({ auth }) => auth)

  React.useEffect(() => {
    if(!Object.keys(account).length) {
      history.push("./");
    }
  }, [history, account]);


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
