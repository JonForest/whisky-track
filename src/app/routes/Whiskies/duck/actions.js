import types from './types'
import { getWhiskies, addWhisky, editWhisky } from '../../../api/whisky-api';

const add = (name) => {
  return (dispatch) => {
    return addWhisky(name)
      .then(response => {
        dispatch({
          type: types.ADD,
          data: response
        })
      })
  }
}

const edit = (whisky) => {
  return (dispatch) => {
    return editWhisky(whisky)
      .then(() => {
        dispatch({
          type: types.EDIT,
          data: whisky
        })
      })
  }
}

const fetchWhiskies = () => {
  return (dispatch) => {
    return getWhiskies()
      .then(response => {
        dispatch({
          type: types.GOT_WHISKIES,
          data: response
        })
      })
  }
}

export default {
  add,
  edit,
  fetchWhiskies
}
