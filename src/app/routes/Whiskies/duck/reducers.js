import types from './types'

const whiskies = (state = [], action) => {
  switch (action.type) {
    case types.ADD:
      return [...state, action.payload]
    case types.GOT_WHISKIES:
      return [...action.payload.data]
    default:
      return state
  }
}

export default whiskies