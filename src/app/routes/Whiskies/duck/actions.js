import types from './types'
import { getWhiskies } from '../../../api/whisky-api';
let nextId = 3

const add = (name) => ({
  type: types.ADD,
  payload: {
    name,
    id: nextId++
  }
})

const fetchWhiskies = () => {
  return (dispatch) => {
    return getWhiskies()
      .then(response => {
        nextId = response.length + 1
        dispatch({
          type: 'GOT_WHISKIES',
          payload: {
            data: response
          }
        })
      })
  }
}

export default {
  add,
  fetchWhiskies
}
