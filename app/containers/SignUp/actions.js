import {
  SAGA_SUBMIT_DATA,
  SUBMIT_DATA_SUCCESS,
  SUBMIT_DATA_FAILURE,
} from '../../appconstants'

export function submitData(data) {
  return {
    type: SAGA_SUBMIT_DATA,
    data,
  }
}

export function submitDataSuccess() {
  return {
    type: SUBMIT_DATA_SUCCESS,
  }
}

export function submitDataFailure(message) {
  return {
    type: SUBMIT_DATA_FAILURE,
    message,
  }
}
