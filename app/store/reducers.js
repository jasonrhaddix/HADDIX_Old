import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import A from './action_types'



export const addProject = (state=[], action) => {
	switch( action.type )
	{
		case A.ADD_PROJECT :
			return [
				...state,
				action.payload
			]

		default:
			return state
	}
}

export const toggleNav = (state=false, action ) =>
	( action.type === A.TOGGLE_NAV ) ? action.payload : state

export const toggleCloseButton = (state=false, action ) =>
	( action.type === A.TOGGLE_CLOSE_BUTTON ) ? action.payload : state

export const setActiveProjectScroll = (state=null, action ) =>
	( action.type === A.SET_ACTIVE_PROJECT_SCROLL ) ? action.payload : state

export const setScrollPosition = (state=0, action ) =>
	( action.type === A.SET_SCROLL_POS ) ? action.payload : state

export const setScrollHeight = (state=0, action ) =>
	( action.type === A.SET_SCROLL_HEIGHT ) ? action.payload : state

export const animateLogo = (state=false, action ) =>
	( action.type === A.ANIMATE_LOGO ) ? action.payload : state

/*export const viewProject = (state=false, action ) =>
	( action.type === A.VIEW_PROJECT ) ? action.payload : state*/



// Reducers mapped to store attributes
export default combineReducers({
	projects: addProject,
    navOpen: toggleNav,
    showCloseButton: toggleCloseButton,
    scrollProject: setActiveProjectScroll,
    scrollPos: setScrollPosition,
    scrollHeight: setScrollHeight,
    animateLogo: animateLogo,
    form: formReducer,
    // viewProject: viewProject,
})