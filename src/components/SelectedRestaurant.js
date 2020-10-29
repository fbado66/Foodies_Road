import React from 'react'
import { withRouter} from 'react-router-dom'
import OrderForm from './OrderForm'



const SelectedRestaurant = (props) => {


    let {products} = props.restaurant
    console.log(products)

    let arrayOfProducts = products.map((productPojo) => {
        console.log(productPojo.price)
        
        return  <div
                    key = {productPojo.id}
                    >
                    
                    <p>{productPojo.name}</p>
                    <img className='restaurant-image' src ={productPojo.image_url} alt ={productPojo.name} />
                    <p>${productPojo.price}.00</p>
                    <OrderForm 
                    product = {productPojo}
                    addOrderToState = {props.addOrderToState} />
                    
                </div>
        
    })

    return (
        <div>
            {arrayOfProducts}
        </div>
    )
}

export default withRouter(SelectedRestaurant)