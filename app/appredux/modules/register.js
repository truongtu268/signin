import {
  SUCCESS_SUBMIT_DATA,
  FAILED_SUBMIT_DATA,
} from '../../appconstants'

const initialState = {
  hasLoading: false,
  hasError: false,
  message: '',
}

function register(state = initialState, action) {
  switch (action.type) {
    case SUCCESS_SUBMIT_DATA:
      return {
        ...state,
        hasLoading: false,
        hasError: false,
        message: '',
      }
    case FAILED_SUBMIT_DATA:
      return {
        ...state,
        hasLoading: false,
        hasError: true,
        message: action.message,
      }
    default:
      return state
  }
}

export default register
