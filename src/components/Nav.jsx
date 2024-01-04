import React from 'react'
import {NavLink, Link} from "react-router-dom"

import '../styles/nav.css'

export default function Nav() {
    const activeStyles = {
        color : "white",
        background : "#0955e5",
    }
    return(
        <nav>

            <Link 
                to='' 
                className='nav-link'
                id='nav-logo'
            >
                R.C
            </Link>
            
            <section id='nav-links'>

                <NavLink 
                    to='' 
                    className='nav-link'
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Home
                </NavLink>

                <NavLink 
                    to='about' 
                    className='nav-link'
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    About
                </NavLink>

                <NavLink 
                    to='products' 
                    className='nav-link'
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Products
                </NavLink>

                <NavLink 
                    to='subscriptions' 
                    className='nav-link'
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Plans
                </NavLink>

                <NavLink 
                    to='contact' 
                    className='nav-link'
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Contact
                </NavLink>

            </section>

        </nav>
    )
}