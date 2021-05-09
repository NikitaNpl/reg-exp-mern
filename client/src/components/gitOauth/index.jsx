import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { fetchGitHubAPI, setAccount } from "../../redux/actions/account";

const gitOauth = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  let { account } = useSelector(({ account }) => account);

  const fetchAccount = React.useCallback(() => {
    const data = new URLSearchParams(window.location.search).get('data');
    if (data) {
      dispatch(setAccount(data));
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

export default gitOauth;
