import React from 'react'
import { withRouter} from 'react-router-dom'
import Product from './Product'


const SelectedRestaurant = (props) => {
    console.log(props)

    let {products} = props.restaurant
    console.log(products)

    let arrayOfProducts = products.map((productPojo) => {
        console.log(productPojo)
        
        return <div key = {productPojo.id}>
                    <p>{productPojo.category}</p>
                    <Product
                    order = {productPojo}
                    addOrderToState = {props.addOrderToState} 
                    cart_id={props.cart_id} /> 
                    
                </div>
    })

    return (
        <div>
            {arrayOfProducts}
        </div>
    )
}

export default withRouter(SelectedRestaurant)