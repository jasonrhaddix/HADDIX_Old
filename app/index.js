import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter, Route }from 'react-router-dom'
import { Provider } from 'react-redux'

import configureStore from './store'
import rootReducer from './store/reducers'
import initialState from './store/initial_state.json'
import { addProject, toggleNav, randomGoals } from './actions'

import App from './AppContainer'



const appData = require("./models/app.json")



const setInitialState = ( localStorage['redux-store'] ) ? JSON.parse( localStorage['redux-store']) : initialState
const saveState = () => localStorage['redux-store'] = JSON.stringify( appStore.getState() )

const appStore = configureStore( setInitialState )
appStore.subscribe( saveState )

/*
appStore.dispatch(
	toggleNav(false)
)
*/


window.appStore = appStore



render (
	<AppContainer>
		<Provider store={appStore}>
			<BrowserRouter>
				<App data={appData}/>
			</BrowserRouter>
		</Provider>
	</AppContainer>,

	document.getElementById( 'app' )
)