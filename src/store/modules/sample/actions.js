import { SET_FOO_REQUEST, SET_FOO_SUCCESS } from './types'

export const setFooRequest = payload => ({
  type: SET_FOO_REQUEST,
  payload
})

export const setFooSuccess = payload => ({
  type: SET_FOO_SUCCESS,
  payload
})
