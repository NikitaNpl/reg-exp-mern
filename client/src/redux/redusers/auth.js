const initialState = {
  account: {},
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
    default:
      return state;
  }
}

export default auth;