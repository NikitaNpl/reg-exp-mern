import React from 'react';
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom";

import {setAccount} from "../../redux/actions/account";

function GitHub() {
  const history = useHistory();
  const dispatch = useDispatch();
  let { account } = useSelector(({ account }) => account);

  const fetchAccount = React.useCallback(() => {
    const code = new URLSearchParams(window.location.search).get('code');
    if (code) {
      dispatch(setAccount(code));
    } else {
      window.location.replace("./");
    }
  }, [dispatch]);

  React.useEffect(() => {
    if (Object.keys(account).length) {
      return history.push("./");
    }
    fetchAccount();
  }, [history, account, fetchAccount]);

  return (
    <div>
      GitHubAuth
    </div>
  )
}

export default GitHub;
