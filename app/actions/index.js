/*
	Authored By: Jason R. Haddix

	These are action creators. Instead of dispatching the store event
	directly, you can add application logic to these action creators
	and call them with the function name.

	'store.dispatch( setGoal(10) )' 
*/

import storeConsts from '../store/action_types'


/* redux action*/
export const addProject = (payload) => {
	// extend the app functionality here
	return {
		type: storeConsts.ADD_PROJECT,
		payload: payload
	}
}


export const toggleNav = bool => {
	// extend the app functionality here
	return {
		type: storeConsts.TOGGLE_NAV,
		payload: bool
	}
}


/*export const viewProject = bool => {
	// extend the app functionality here
	return {
		type: storeConsts.VIEW_PROJECT,
		payload: bool
	}
}*/


/* redux thunk*/
export const randomGoals = (num, num2) => (dispatch, getState) => {

	// allows for multiple dispatch events
	dispatch({
		type: storeConsts.SET_GOAL,
		payload: num
	})

	/*setTimeout(() => {
		dispatch({
			type: storeConsts.SET_GOAL_2,
			payload: num2
		})
	}, 1500)*/

}