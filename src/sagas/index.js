import { all, fork } from 'redux-saga/effects'

import sample from './sample'

export default function* rootSaga() {
  yield all([fork(sample)])
}
