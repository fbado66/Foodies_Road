import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div>
            <h1>Best Food, Delivered</h1>
            <img src='https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made.jpg' alt='' />
            <Link 
                to={'/restaurants'}
                >
                Order Now
            </Link>

            <p> Some text</p>
        </div>
    )
}
export default Home