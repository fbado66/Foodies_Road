import React from 'react'
import {Link} from 'react-router-dom'
import {Button } from 'semantic-ui-react'


function Home() {
    
    return (
        <div>
            <h1 className ='text-header'>Best Food, Delivered</h1>           
            <div className = 'hero-section'>
                <div className ='hero-text'>
                    <h2 id='home-subTitle'> LET US BRING YOU THE OPTIONS</h2>
                    <div>Get it delivered right to your door. Or Try Pickup on your way home. It's mealtime on your time.</div>
                    <Button color='yellow'as={Link} to='/restaurants' id='buyNowBut'> Order Now </Button>
                    {/* <div className ='order_now'><Link to={'/restaurants'}>Order Now</Link></div>> */}
                </div>
                <img className ='home-image'src="https://d2tp0uk1jt95hu.cloudfront.net/_next/static/images/landing_feature_dish-1f6bf47a195d4ddcef798ca6e06355b5.png" alt='' />
            </div>  
            

           
        </div>
    )
}
export default Home