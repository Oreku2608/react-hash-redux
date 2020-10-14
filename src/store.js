import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const INITIAL_STATE = {
  message: ''
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'STORE_MESSAGE':
      return { ...state, message: action.value }
  
    default:
      return state
  }
}

const store = createStore(reducer, composeWithDevTools())

export default store