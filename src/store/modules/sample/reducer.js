import { SET_FOO_SUCCESS } from './types'

const INITIAL_STATE = {
  foo: ''
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_FOO_SUCCESS:
      return {
        foo: action.payload
      }

    default:
      return state
  }
}
