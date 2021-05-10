import React from 'react';
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Link, Route, Switch, } from 'react-router-dom';

import Creation from "./Create/index";
import Favorites from "./Favorites";
import Viewed from "./Viewed";

function Account() {
  const history = useHistory();
  let { account } = useSelector(({ account }) => account)

  // React.useEffect(() => {
  //   if (!Object.keys(account).length) {
  //     history.push("/");
  //   }
  // }, [history, account]);

  const isSelected = (link) => {
    const splitPathname = history.location.pathname.split("/");
    if (splitPathname[2] === link) {
      return 'active';
    }
    return;
  }

  return (
    <div className="">
      <div className="categories container">
        <div className="categories__list">
          <ul>
            <Link to="/account/create" className={`border-gray ${isSelected("create")}`}>Создать</Link>
            <Link to="/account/favorites" className={`border-gray ${isSelected("favorites")}`}>Избранное</Link>
            <Link to="/account/viewed" className={`border-gray ${isSelected("viewed")}`}>Просмотренное</Link>
          </ul>
        </div>
      </div>
      <Switch>
        <Route
          path={`/account/create`}
          render={props => <Creation {...props} />}
        />
        <Route
          path={`/account/favorites`}
          render={props => <Favorites {...props} />}
        />
        <Route
          path={`/account/viewed`}
          render={props => <Viewed {...props} />}
        />
      </Switch>
    </div>
  )
}

export default Account;
