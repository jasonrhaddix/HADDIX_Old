import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import uuid from 'uuid'

import NavigationData from './data/NavigationData.js'
import Transition from 'react-transition-group/Transition';



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
        const defaultStyle_NavContainer = {
          transition: `height ${0}ms ease-in-out 1s`,
          height: '0vh',
        }

        const transitionStyles_NavContainer = {
          entering: { height: '0vh', transition: `height ${0}ms ease-in-out 0s` },
          entered:  { height: '100vh', transition: `height ${0}ms ease-in-out 0s` },
        };

        const defaultStyle_Poly = {
          transition: `clip-path ${700}ms ease-in-out`,
          clipPath: 'polygon(0% 0%, 110% 0%, 0% 0%, 0% 50%, 0% 100%)',
        }

        const transitionStyles_Poly = {
          entering: { clipPath: 'polygon(0% 0%, 110% 0%, 0% 0%, 0% 50%, 0% 100%)' },
          entered:  { clipPath: 'polygon(0% 0%, 110% 0%, 75% 80%, 10% 90%, 0% 100%)' },
        };

        const defaultStyle_Nav = {
          transition: `opacity ${600}ms ease-in-out 0.2s`,
          opacity: '0',
        }

        const transitionStyles_Nav = {
          entering: { opacity: '0' },
          entered:  { opacity: '1' },
        };


        return (
            <Transition in={appStore.getState().navOpen} timeout={0}>
                {(state) => (
                    <div className={`nav-container ${appStore.getState().navOpen}`} style={{ ...defaultStyle_NavContainer, ...transitionStyles_NavContainer[state] }}>
                      <div className="nav-poly" style={{ ...defaultStyle_Poly, ...transitionStyles_Poly[state] }}>
                        <nav style={{ ...defaultStyle_Nav, ...transitionStyles_Nav[state] }}>
                            <ul>
                                {this.getNavData()}
                            </ul>
                        </nav>
                      </div>
                    </div>
                )}
            </Transition>
        )
    }
}



export default Navigation

