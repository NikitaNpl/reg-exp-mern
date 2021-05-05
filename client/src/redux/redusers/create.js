const initialState = {
  topics: [],
  currentPage: 1,
  selectedTopic: {
    id: 1,
    title: "Тема",
    tag: "categoriesId",
    description: "Тематика регулярного выражения",
    info: null,
    isApproved: false
  },
  tests: [],
  selectedTest: {
    id: 1,
    title: "Тест №1",
    description: "Данный тест позволяет проверить корректность написанного регулярного выражения",
    isApproved: false
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

const saveSelectedTest = (tests, selectedTest) => {
  return tests.map((test) => {
    if (test.id === selectedTest.id) {
      return { ...selectedTest };
    }
    return test;
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
    case 'SET_INFO_TOPIC': {
      return {
        ...state,
        selectedTopic: { ...state.selectedTopic, info: action.info, isApproved: action.isApproved }
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
    case 'SET_TESTS':
      return {
        ...state,
        tests: action.tests
      }
    case 'SET_IS_PASSED_TEST':
      return {
        ...state,
        selectedTest: { ...state.selectedTest, isApproved: action.isApproved }
      }
    case 'SET_NEXT_TEST': {
      const selectedTestID = state.selectedTest.id;
      const newSelectedTest = selectedTestID < 3
        ? (state.tests.find((test) => test.id === selectedTestID + 1))
        : (state.selectedTest);

      return {
        ...state,
        tests: saveSelectedTest(state.tests, state.selectedTest),
        selectedTest: newSelectedTest
      }
    }
    case 'SET_PREV_TEST': {
      const selectedTestID = state.selectedTest.id;
      const newSelectedTest = selectedTestID > 1
        ? (state.tests.find((test) => test.id === selectedTestID - 1))
        : (state.selectedTest);

      return {
        ...state,
        tests: saveSelectedTest(state.tests, state.selectedTest),
        selectedTest: newSelectedTest
      }
    }
    default:
      return state;
  }
}

export default create;