import types from './types'

const defaultState = [
  {
    name: 'Whisky 1',
    id: 1
  },
  {
    name: 'Whisky 2',
    id: 2
  }
]

const whiskies = (state = defaultState, action) => {
  switch (action.type) {
    case types.ADD:
      return [...state, action.payload]
    default:
      return state
  }
}

export default whiskies