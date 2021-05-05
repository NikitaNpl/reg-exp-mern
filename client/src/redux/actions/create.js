
export const setNextPage = () => ({
  type: 'SET_NEXT_PAGE'
})

export const setPrevPage = () => ({
  type: 'SET_PREV_PAGE'
})

export const setTopics = (topics) => ({
  type: 'SET_TOPICS',
  topics
})

export const setTopic = (topic) => ({
  type: 'SET_TOPIC',
  topic
})

export const setInfoTopic = (info, isFilled) => ({
  type: 'SET_INFO_TOPIC',
  info,
  isFilled
})