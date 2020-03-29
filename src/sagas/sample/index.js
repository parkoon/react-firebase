import { all, takeEvery, put, fork } from 'redux-saga/effects'
import { SET_FOO_REQUEST } from '../../store/modules/sample/types'
import { setFooSuccess } from '../../store/modules/sample/actions'

function* setFoo(action) {
  console.log(action)
  yield put(setFooSuccess(action.payload))
}

function* watchFoo() {
  yield takeEvery(SET_FOO_REQUEST, setFoo)
}

export default function* sampleSaga() {
  yield all([fork(watchFoo)])
}
