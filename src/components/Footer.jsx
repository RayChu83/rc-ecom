import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/footer.css'

export default function Footer() {
    const activeStyles = {
        textDecoration : "underline",
        textDecorationColor : "#626262",
        textUnderlineOffset : "8px",
        textDecorationThickness : "2px",
        color: "rgb(200, 200, 200)",
    }
    return(
        <footer>
            <section className='footer-links'>
                <NavLink 
                    to='' 
                    className='footer-link'
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Home
                </NavLink>

                <NavLink 
                    to='about' 
                    className='footer-link'
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    About
                </NavLink>

                <NavLink 
                    to='products' 
                    className='footer-link'
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Products
                </NavLink>

                <NavLink 
                    to='contact' 
                    className='footer-link'
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Contact
                </NavLink>
            </section>
            <p>© Ray Chu - All Rights Reserved.</p>
        </footer>
    )
}