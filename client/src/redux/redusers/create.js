const initialState = {
  topics: [],
  currentPage: 1,
  selectedTopic: {
    id: 1,
    title: "Тема",
    description: "Тематика регулярного выражения",
    filled: false
  },
  creature: {
    category: null,
    caption: null,
    pattern: null,
    placeholder: null,
    description: null,
  }
}

const saveSelectedTopic = (topics, selectedTopic) => {
  return topics.map((topic) => {
    if (topic.id === selectedTopic.id) {
      return { ...selectedTopic };
    }
    return topic;
  })
}

const create = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NEXT_PAGE':
      return {
        ...state,
        currentPage: state.currentPage !== 3 ? state.currentPage + 1 : state.currentPage
      }
    case 'SET_PREV_PAGE':
      return {
        ...state,
        currentPage: state.currentPage !== 1 ? state.currentPage - 1 : state.currentPage
      }
    case 'SET_TOPICS':
      return {
        ...state,
        topics: action.topics
      }
    case 'SET_TOPIC':
      return {
        ...state,
        topics: saveSelectedTopic(state.topics, state.selectedTopic),
        selectedTopic: action.topic
      }
    case 'SET_NEXT_TOPIC': {

      return {
        ...state,
        topics: saveSelectedTopic(state.topics, state.selectedTopic),
        selectedTopic: action.topic
      }
    }
    case 'SET_PREV_TOPIC': {

      return {
        ...state,
        topics: saveSelectedTopic(state.topics, state.selectedTopic),
        selectedTopic: action.topic
      }
    }
    case 'SET_FILLED_TOPIC':
      return {
        ...state,
        selectedTopic: { ...state.selectedTopic, filled: action.isFilled }
      }
    case 'SET_CATEGORIE':
      return {
        ...state,
        creature: {
          ...state.creature,
          category: action.categorie
        }
      }
    case 'SET_PATTERN':
      return {
        ...state,
        creature: {
          ...state.pattern,
          pattern: action.pattern
        }
      }
    case 'SET_CAPTION':
      return {
        ...state,
        creature: {
          ...state.creature,
          caption: action.caption
        }
      }
    case 'SET_PLACEHOLDER':
      return {
        ...state,
        creature: {
          ...state.creature,
          placeholder: action.placeholder
        }
      }
    case 'SET_DESCRIPTION':
      return {
        ...state,
        creature: {
          ...state.creature,
          description: action.description
        }
      }
    default:
      return state;
  }
}

export default create;