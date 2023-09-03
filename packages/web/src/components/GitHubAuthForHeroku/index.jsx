import React from 'react';
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom";

import { fetchDataGitHubUser } from "../../redux/actions/account";

const GitHubForHeroku = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  let { account } = useSelector(({ account }) => account);

  const fetchAccount = React.useCallback(() => {
    const accessToken = new URLSearchParams(window.location.search).get('access_token');
    if (accessToken) {
      dispatch(fetchDataGitHubUser(accessToken));
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

export default GitHubForHeroku;
