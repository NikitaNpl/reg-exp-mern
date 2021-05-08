const initialState = {
  items: [],
  itemsLikes: [],
  regExpIsLoaded: false
}

const regExp = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RegExp': {
      return {
        ...state,
        items: action.payload,
        regExpIsLoaded: true
      }
    }
    case 'SET_LIKE': {
      return {
        ...state,
        itemsLikes: [...state.itemsLikes, action.payload]
      }
    }
    case 'SET_UnLike': {
      const newItemsLikes = state.itemsLikes.filter(id => id !== action.payload);

      return {
        ...state,
        itemsLikes: newItemsLikes
      }
    }
    case 'SET_OneRegExp': {
      const newItems = state.items.map((item) => {
        if (item._id === action.item._id) {
          return action.item;
        }
        return item;
      });

      return {
        ...state,
        items: newItems
      }
    }
    case 'SET_LOADED': {
      return {
        ...state,
        regExpIsLoaded: action.payload
      }
    }
    default:
      return state;
  }
}

export default regExp;