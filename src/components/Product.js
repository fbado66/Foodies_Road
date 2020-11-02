import React from 'react'
import CartContainer from './CartContainer'
import OrderForm from './OrderForm'

class Product extends React.Component {

    render() {
        // console.log(this.props)
        let {id, name, image_url, price} = this.props.order
        return(
            
                <div className='product-card'>
                    <img className = 'product-image' src = {image_url} alt ={name} />
                    <p className = 'product-name'>{name}</p>
                    <p className = 'product-price'>$ {price}.00</p>
                
                    <OrderForm 
                    addOrderToState = {this.props.addOrderToState}
                    product_id = {id}
                    cart_id = {this.props.cart_id}
                    token = {this.props.token} />
            
            </div>

        )
    }
}

export default Product