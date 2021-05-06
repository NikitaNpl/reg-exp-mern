import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { fetchGitHubAPI } from "../../redux/actions/auth";

const GitHubAuth = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  let { account } = useSelector(({ auth }) => auth)

  React.useEffect(() => {
    if(Object.keys(account).length) {
      history.push("./");
    }
  }, [history, account]);

  (function () {
    const code = new URLSearchParams(window.location.search).get('code');
    if (code) {
      dispatch(fetchGitHubAPI(code))
    } else {
      window.location.replace("./");
    }
  })()
  return (
    <div>
      GitHubAuth
    </div>
  )
}

export default GitHubAuth;
