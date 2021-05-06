import axios from "axios";

export const fetchGitHubAPI = (code) => (dispatch) => {
  axios
    .get(`/api/users/oauth-callback?code=${code}`)
    .then(({ data }) => {
      dispatch(setAccount(...data));
    });
}

export const setAccount = (payload) => ({
  type: 'SET_ACCOUNT',
  payload,
})