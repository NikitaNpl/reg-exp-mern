
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

export const setCategorie = (categorie) => ({
  type: 'SET_CATEGORIE',
  categorie
})

export const setPattern = (pattern) => ({
  type: 'SET_PATTERN',
  pattern
})

export const setCaption = (caption) => ({
  type: 'SET_CAPTION',
  caption
})

export const setPlaceholder = (placeholder) => ({
  type: 'SET_PLACEHOLDER',
  placeholder
})

export const setDescription = (description) => ({
  type: 'SET_DESCRIPTION',
  description
})

export const setFilledTopic = (isFilled) => ({
  type: "SET_FILLED_TOPIC",
  isFilled
})