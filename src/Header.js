import React from 'react'
import {NavLink} from 'react-router-dom'

function Header(props) {
   
    if (props.orderNum === 0 )
    return <div>
                <NavLink to='/'>Foodies Road</NavLink>
                <ul>
                    <NavLink to='/login'>Log in</NavLink>
                    <NavLink to='/register'>Register</NavLink>
                    <NavLink to='/cart'>Cart </NavLink>
                </ul>
            </div>
    
    return(
        
        <div>    
            <NavLink to='/'>Foodies Road</NavLink>
            <ul>
                <NavLink to='/login'>Log in</NavLink>
                <NavLink to='/register'>Register</NavLink>
                <NavLink to='/cart'>Cart {props.orderNum}</NavLink>
            </ul>
        </div>
    )
}

export default Header