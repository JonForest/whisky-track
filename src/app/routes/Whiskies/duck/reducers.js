import types from './types'

const whiskies = (state = [], action) => {
  switch (action.type) {
    case types.ADD:
      return [...state, action.data]
    case types.GOT_WHISKIES:
      return [...action.data]
    case types.EDIT:
      return state.map(whisky => 
        (whisky.id == action.data.id) ? {...whisky, name: action.data.name} : whisky
      )
    default:
      return state
  }
}

export default whiskies