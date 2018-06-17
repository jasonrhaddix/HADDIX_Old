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

export const toggleCloseButton = bool => {
	// extend the app functionality here
	return {
		type: storeConsts.TOGGLE_CLOSE_BUTTON,
		payload: bool
	}
}

export const setActiveProjectScroll = string => {
	// extend the app functionality here
	return {
		type: storeConsts.SET_ACTIVE_PROJECT_SCROLL,
		payload: string
	}
}

export const setScrollPosition = num => {
	// extend the app functionality here
	return {
		type: storeConsts.SET_SCROLL_POS,
		payload: num
	}
}

export const setScrollHeight = num => {
	// extend the app functionality here
	return {
		type: storeConsts.SET_SCROLL_HEIGHT,
		payload: num
	}
}

export const animateLogo = bool => {
	// extend the app functionality here
	return {
		type: storeConsts.ANIMATE_LOGO,
		payload: bool
	}
}



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