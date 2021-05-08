import axios from 'axios';

export const fetchRegExp = (category, text) => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get(
      `/api/items/${category !== null ? `search/${category}` : ''
      }${text !== "" ? `search/${text}` : ''}`
    )
    .then(({ data }) => {
      dispatch(setRegExp(data));
    });
}

export const fetchLike = (itemId) => (dispatch) => {
  axios
    .patch(`/api/items/like/${itemId}`)
    .then(({ data }) => {
      dispatch(setLike(data.itemId));
      dispatch(fetchOneRegExp(data.itemId));
    })
}

export const fetchUnLike = (itemId) => (dispatch) => {
  axios
    .patch(`/api/items/unlike/${itemId}`)
    .then(({ data }) => {
      dispatch(setUnLike(data.itemId));
      dispatch(fetchOneRegExp(data.itemId));
    })
}

export const fetchViews = (itemId) => (dispatch) => {
  axios
    .patch(`/api/items/views/${itemId}`)
    .then(({ data }) => {
      dispatch(fetchOneRegExp(data.itemId));
    })
}

export const fetchOneRegExp = (id) => (dispatch) => {
  axios
    .get(
      `/api/items/${id !== undefined ? id : ''}`
    )
    .then(({ data }) => {
      dispatch(setOneRegExp(...data))
    });
}

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload
})

export const setRegExp = (items) => ({
  type: 'SET_RegExp',
  payload: items,
})

export const setOneRegExp = (item) => ({
  type: 'SET_OneRegExp',
  item
})

export const setLike = (itemId) => ({
  type: 'SET_LIKE',
  payload: itemId
})

export const setUnLike = (itemId) => ({
  type: 'SET_UnLike',
  payload: itemId
})