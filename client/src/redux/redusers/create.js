const initialState = {
  topics: [],
  selectedTopic: {
    "id": 1,
    "title": "Тема",
    "description": "Тематика регулярного выражения"
  },
  topic: null,
  caption: null,
  pattern: null,
  placeholder: null,
  description: null,
}

const create = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TOPICS':
      return {
        ...state,
        topics: action.payload
      }
    case 'SET_TOPIC':
      return {
        ...state,
        selectedTopic: action.payload
      }
    default:
      return state;
  }
}

export default create;