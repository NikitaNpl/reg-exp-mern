const initialState = {
  topics: [],
  currentPage: 1,
  selectedTopic: {
    id: 1,
    title: "Тема",
    description: "Тематика регулярного выражения",
    info: null,
    filled: false
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
    case 'SET_INFO_TOPIC': {
      return {
        ...state,
        selectedTopic: {...state.selectedTopic, info: action.info, filled: action.isFilled}
      }
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
    default:
      return state;
  }
}

export default create;