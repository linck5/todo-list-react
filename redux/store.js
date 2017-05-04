import { applyMiddleware, compose, createStore } from 'redux'
import todoReducer from './todoReducer'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux'

let finalCreateStore = compose(
  applyMiddleware(createLogger(), thunk)
)(createStore);

export default function configureStore(initialState){
  return finalCreateStore(combineReducers({todos: todoReducer}), initialState);
}
