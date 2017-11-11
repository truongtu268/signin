import { call, put } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga'
import { SAGA_SUBMIT_DATA } from '../../appconstants'
import { submitDataSuccess, submitDataFailure } from './actions'
import * as api from '../../api'
import { url } from '../../utils/appUtils'

function* watchSignup() {
  yield* takeLatest(SAGA_SUBMIT_DATA, fetchSignup)
}

function* fetchSignup(action) {
  try {
    const signup = yield call(api.fetchSignupOnServer, action.data)
    window.location = url(action.data.subDomain, signup)
    yield put(submitDataSuccess())
  } catch (e) {
    yield put(submitDataFailure(e.message))
  }
}

export default [
  watchSignup,
]
