import React from 'react'
import {NavLink} from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header(props) {

    let logged = 'log in'

    if (props.token){
        logged = 'log out '
    }
    
   
    if (props.orderNum === 0  ){
    return <div className='nav_header'>
                <div className = 'logo '><NavLink to='/'>Foodies Road</NavLink></div>
                <ul className=''>
                    <NavLink to='/login'>{logged}</NavLink>
                    <NavLink to='/register'>Register</NavLink>
                    <NavLink to='/profile'>Profile</NavLink>
                    <NavLink to='/cart'><ShoppingCartIcon /> </NavLink>
                </ul>
            </div>
 
    }else {
        return(
        
        <div className='nav_header'>    
            <div className = 'logo '><NavLink to='/'>Foodies Road</NavLink></div>
            <ul className=''>
                <NavLink to='/login'>{logged}</NavLink>
                <NavLink to='/profile'>Profile</NavLink>
                <NavLink to='/register'>Register</NavLink>
                <NavLink to='/cart'><ShoppingCartIcon /> <div className='count'>{props.orderNum} </div></NavLink>
            </ul>
        </div>
    )
}
}

export default Header