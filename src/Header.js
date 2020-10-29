import React from 'react'
import {NavLink} from 'react-router-dom'

function Header() {
    return(
        <div>
            <NavLink to='/'>Foodies Road</NavLink>
            <ul>
                <NavLink to='/login'>Log in</NavLink>
                <NavLink to='/register'>Register</NavLink>
                <NavLink to='/cart'>Cart</NavLink>
            </ul>
        </div>
    )
}

export default Header