// Middleware

import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

import rootReducer from './reducers'



const consoleMessages = store => next => action => {
	let result;

	console.log(`dispatching action => ${action.type}`)
	result = next( action );

	return result;
}




export default (initialState={}) => {
		return applyMiddleware(thunk, consoleMessages)(createStore)(rootReducer, initialState)
}