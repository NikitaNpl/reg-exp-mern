import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { fetchGitHubAPI } from "../../redux/actions/account";

const GitHubAuth = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  let { account } = useSelector(({ account }) => account);

  const fetchAccount = React.useCallback(() => {
    const code = new URLSearchParams(window.location.search).get('code');
    if (code) {
      dispatch(fetchGitHubAPI(code));
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

export default GitHubAuth;
