import axios from 'axios';

export const fetchCategories = () => (dispatch) => {
  dispatch(setLoaded(false));
  axios.get(
    `/api/categories`
  ).then(({ data }) => {
    dispatch(setCategory(data));
  });
}

export const setLoaded = (payload) => ({
  type: 'SET_LOADED_CATEGORIES',
  payload
})

export const setCategory = (obj) => ({
  type: 'SET_CATEGORY',
  payload: obj
})

export const setChosenCategory = (type) => ({
  type: 'SET_CHOSEN_CATEGORY',
  payload: type
})

export const setSearchText = (text) => ({
  type: 'SET_SEARCH_TEXT',
  payload: text
})
