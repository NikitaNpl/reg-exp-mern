import axios from "axios";

export const fetchGitHubAPI = (code) => (dispatch) => {
  axios
    .get(`/api/users/oauth-callback?code=${code}`)
    .then(({ data }) => {
      dispatch(setAccount(...data));
    }).catch(err => console.log(err));
}

export const setAccount = (payload) => ({
  type: 'SET_ACCOUNT',
  payload,
});

export const fetchUser = (userId) => (dispatch) => {
  axios
    .get(`/api/users?id=${userId}`)
    .then(({ data }) => {
      dispatch(setAccount(...data));
    }).catch(err => console.log(err));
}

export const fetchAccountUpdate = (fetch, userId, cartId) => (dispatch) => {
  axios
    .patch(`/api/users/${fetch === "viewed" ? "viewed" : "favorites"}?userId=${userId}&cartId=${cartId}`)
    .then(({ data }) => {
      dispatch(fetchUser(data.userId));
    }).catch(err => console.log(err));
}

export const fetchAccountUnFavorites = (userId, cartId) => (dispatch) => {
  axios
    .delete(`/api/users/favorites?userId=${userId}&cartId=${cartId}`)
    .then(({ data }) => {
      dispatch(fetchUser(data.userId));
    }).catch(err => console.log(err));
}

export const fetchOneRegExp = (id, isLiked = false) => (dispatch) => {
  axios
    .get(
      `/api/items/${id}`
    )
    .then(({ data }) => {
      if (!isLiked) {
        dispatch(setViewed(...data))
      } else {
        dispatch(setFavorites(...data))
      }
    }).catch(err => console.log(err));
}

// export const fetchUpdateCreatedExpressions = (userId, cartId) => (dispatch) => {
//   axios
//     .patch(`/api/users/createdExpressions?userId=${userId}&cartId=${cartId}`)
//     .then(({ data }) => {
//       dispatch(fetchUser(data.userId));
//     }).catch(err => console.log(err));
// }

export const setViewed = (payload) => ({
  type: 'SET_VIEWED',
  payload
})

export const clearViewed = () => ({
  type: 'CLEAR_VIEWED'
})

export const setFavorites = (payload) => ({
  type: 'SET_FAVORITES',
  payload
})

export const clearFavorites = () => ({
  type: 'CLEAR_FAVORITES'
})

export const setCreatedExpression = (payload) => ({
  type: 'SET_CREATED_EXP',
  payload
})

export const clearCreatedExpression = () => ({
  type: 'CLEAR_CREATED_EXP'
})

export const createRegExp = (data) => (dispatch) => {
  axios
    .post(`/api/items/`, data)
    .then(({ data }) => {
      console.log(data);
    })
}
