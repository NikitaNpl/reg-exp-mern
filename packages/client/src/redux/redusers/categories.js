const initialState = {
  categories: [],
  chosenCategory: null,
  searchText: '',
  categoriesIsLoaded: false
}

const categories = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SORT_BY':
      return {
        ...state,
        sortBy: action.payload
      }
    case 'SET_CATEGORY':
      return {
        ...state,
        categories: action.payload,
        categoriesIsLoaded: true
      }
    case 'SET_LOADED_CATEGORIES':
      return {
        ...state,
        categoriesIsLoaded: action.payload
      }
    case 'SET_CHOSEN_CATEGORY':
      return {
        ...state,
        chosenCategory: action.payload
      }
    case 'SET_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.payload
      }
    default:
      return state;
  }
}

export default categories;