import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
let store =applyMiddleware(thunk)(createStore) (reducers)

export default store