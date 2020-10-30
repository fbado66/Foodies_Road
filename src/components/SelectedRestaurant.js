import React from 'react'
import { withRouter} from 'react-router-dom'
import CartContainer from './CartContainer'
import Product from './Product'


const SelectedRestaurant = (props) => {

    let {products} = props.restaurant
    console.log(products)

    let arrayOfProducts = products.map((productPojo) => {
        console.log(productPojo.price)
        
        return<Product
                    key = {productPojo.id}
                    order = {productPojo}
                    addOrderToState = {props.addOrderToState} /> 
    })

    return (
        <div>
            {arrayOfProducts}
        </div>
    )
}

export default withRouter(SelectedRestaurant)