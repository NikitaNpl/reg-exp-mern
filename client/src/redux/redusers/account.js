const initialState = {
  account: {},
  viewed: [],
  favorites: [],
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACCOUNT': {
      return {
        ...state,
        account: action.payload
      }
    }
    case 'FETCH_GITHUB_API': {
      return {
        ...state,
        items: action.payload
      }
    }
    case 'SET_VIEWED': {
      return {
        ...state,
        viewed: [...state.viewed, action.payload]
      }
    }
    case 'CLEAR_VIEWED': {
      return {
        ...state,
        viewed: []
      }
    }
    case 'SET_FAVORITES': {
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      }
    }
    case 'CLEAR_FAVORITES': {
      return {
        ...state,
        favorites: []
      }
    }
    default:
      return state;
  }
}

export default auth;