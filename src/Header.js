import React from 'react'
import {NavLink} from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header(props) {

    let logged = 'lOG IN'
    let profile = 'PROFILE'

    if (props.token){
        logged = 'LOG OUT'
        profile = `Hi ${props.name}!`
    }
    
    if (props.cart.length > 0) {
        if (props.orderNumber.length === 0  ){
            return <div className='nav_header'>
                        <div className = 'logo '><NavLink to='/'>Foodies Road</NavLink></div>
                        <ul className=''>
                            <NavLink to='/login'>{logged}</NavLink>
                            <NavLink to='/register'>REGISTER</NavLink>
                            <NavLink to='/profile'>{profile}</NavLink>
                            <NavLink to='/cart'><ShoppingCartIcon /> </NavLink>
                        </ul>
                    </div>
            }else {
                return(
                    <div className='nav_header'>    
                        <div className = 'logo '><NavLink to='/'>Foodies Road</NavLink></div>
                        <ul className=''>
                            <NavLink to='/login'>{logged}</NavLink>
                            <NavLink to='/profile'>{profile}</NavLink>
                            <NavLink to='/register'>REGISTER</NavLink>
                            <NavLink to='/cart'><ShoppingCartIcon /> <div className='count'>{props.orderNumber.length} </div></NavLink>
                        </ul>
                    </div>
                )
            }
        } else {
            return <div className='nav_header'>
                        <div className = 'logo '><NavLink to='/'>Foodies Road</NavLink></div>
                        <ul className=''>
                            <NavLink to='/login'>{logged}</NavLink>
                            <NavLink to='/register'>REGISTER</NavLink>
                            <NavLink to='/profile'>{profile}</NavLink>
                            <NavLink to='/cart'><ShoppingCartIcon /> </NavLink>
                        </ul>
                    </div>
    }
}

export default Header