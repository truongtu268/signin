import { combineReducers } from 'redux'
import { LOCATION_CHANGE } from 'react-router-redux'
import rootReducer from './appredux'

// Initial routing state
const routeInitialState = {
  locationBeforeTransitions: null,
}

function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return {
        ...state,
        locationBeforeTransitions: action.payload,
      }
    default:
      return state
  }
}

export default function createReducer(asyncReducers) {
  const rootRedux = {
    route: routeReducer,
    ...rootReducer,
    ...asyncReducers,
  }

  return combineReducers(rootRedux)
}
