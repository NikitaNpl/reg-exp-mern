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
        selectedTopic: { ...state.selectedTopic, info: action.info, filled: action.isFilled }
      }
    }
    case 'SET_NEXT_TOPIC': {
      const selectedTopicID = state.selectedTopic.id;
      const newSelectedTopic = selectedTopicID < 5
        ? (state.topics.find((topic) => topic.id === selectedTopicID + 1))
        : (state.selectedTopic);

      return {
        ...state,
        topics: saveSelectedTopic(state.topics, state.selectedTopic),
        selectedTopic: newSelectedTopic
      }
    }
    case 'SET_PREV_TOPIC': {
      const selectedTopicID = state.selectedTopic.id;
      const newSelectedTopic = selectedTopicID > 1
        ? (state.topics.find((topic) => topic.id === selectedTopicID - 1))
        : (state.selectedTopic);

      return {
        ...state,
        topics: saveSelectedTopic(state.topics, state.selectedTopic),
        selectedTopic: newSelectedTopic
      }
    }
    default:
      return state;
  }
}

export default create;