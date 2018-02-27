import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import uuid from 'uuid'

import NavigationData from './data/NavigationData.js'



class Navigation extends React.Component {

    constructor(props) {
        super(props)

        this.getNavData()
    }


    getNavData()
    {
        this.navMap = NavigationData.map(function(data) {

            var navData = data.navigation.map(function(section) {
                return (
                    <li key={uuid.v4()}><Link to='/about'><h1>{section.title}</h1></Link></li>
                )
            })

            return navData
        })

        return this.navMap
    }


    render()
    {
        return (
            <div className={`nav-container ${appStore.getState().navOpen}`}>
                <nav>
                    <ul>
                        {this.getNavData()}
                    </ul>
                </nav>
            </div>
        )
    }
}



export default Navigation

