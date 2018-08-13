import types from './types'
let nextId = 3

const add = (name) => ({
  type: types.ADD,
  payload: {
    name,
    id: nextId++
  }
})

export {
  add
}