import { combineReducers } from 'redux'
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



/*export const viewProject = (state=false, action ) =>
	( action.type === A.VIEW_PROJECT ) ? action.payload : state*/



export default combineReducers({
	projects: addProject,
    navOpen: toggleNav,
    // viewProject: viewProject,
})