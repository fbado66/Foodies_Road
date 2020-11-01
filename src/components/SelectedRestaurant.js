import React from 'react'
import { withRouter} from 'react-router-dom'
import CategoryNavBar from './CategoryNavBar'
import Product from './Product'


const SelectedRestaurant = (props) => {

    let {products} = props.restaurant
    console.log(props)

    let arrayOfProducts = products.map((productPojo) => {
        console.log(productPojo.category)
        
        return <div key = {productPojo.id}>            
                    <Product
                    order = {productPojo}
                    addOrderToState = {props.addOrderToState} 
                    cart_id={props.cart_id}
                    token = {props.token} />   
                </div>
    })

    return (
        <div>
            {arrayOfProducts}
        </div>
    )
}

export default withRouter(SelectedRestaurant)