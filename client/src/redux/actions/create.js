
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

export const setNextTopic = () => ({
  type: 'SET_NEXT_TOPIC'
})

export const setPrevTopic = () => ({
  type: 'SET_PREV_TOPIC'
})

export const setInfoTopic = (info, isApproved) => ({
  type: 'SET_INFO_TOPIC',
  info,
  isApproved
})

export const setTests = (tests) => ({
  type: 'SET_TESTS',
  tests
})

export const setIsApprovedTest = (isApproved) => ({
  type: 'SET_IS_APPROVED_TEST',
  isApproved
})

export const setNextTest = () => ({
  type: 'SET_NEXT_TEST'
})

export const setPrevTest = () => ({
  type: 'SET_PREV_TEST'
})