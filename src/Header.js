import React from 'react'
import {NavLink} from 'react-router-dom'

function Header(props) {
   
    if (props.orderNum === 0 )
    return <div className='nav_header'>
                <div className = 'logo '><NavLink to='/'>Foodies Road</NavLink></div>
                <ul className='nav_rightSided'>
                    <NavLink to='/login'>Log in</NavLink>
                    <NavLink to='/register'>Register</NavLink>
                    <NavLink to='/cart'>Cart </NavLink>
                </ul>
            </div>
    
    return(
        
        <div className='nav_header'>    
            <div className = 'logo '><NavLink to='/'>Foodies Road</NavLink></div>
            <ul className='nav_rightSided'>
                <NavLink to='/login'>Log in</NavLink>
                <NavLink to='/register'>Register</NavLink>
                <NavLink to='/cart'>Cart <div className='count'>{props.orderNum} </div></NavLink>
            </ul>
        </div>
    )
}

export default Header