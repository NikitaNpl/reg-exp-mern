import React from 'react'

import axios from 'axios';

export default function GitHubAuth() {
  (function () {
    const code = new URLSearchParams(window.location.search).get('code');
    const redirect = code ?
      axios
        .get(`/oauth-callback?code=${code}`)
        .then(({ data }) => {
          console.log(data.redirect)
          window.location.replace(data.redirect)
        })
      : "";
  })()
  return (
    <div>
      GitHubAuth
    </div>
  )
}
