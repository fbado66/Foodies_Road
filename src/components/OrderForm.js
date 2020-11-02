import React from 'react';
import {withRouter} from 'react-router-dom'



class OrderForm extends React.Component {

    state = {
        orders: []      
    }

    handleClick = (evt) => {
        evt.preventDefault()
        if (this.props.token) {
            fetch('http://localhost:3000/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify({
                cart_id: this.props.cart_id,
                product_id: this.props.product_id,
                quantity: 1
            })
        })

        .then(res => res.json())
        .then((createdOrder) => {
            // console.log(createdOrder)
            this.props.addOrderToState(createdOrder)
        })
            
        } else {
            this.props.history.push("/login")
        }
        // console.log(this.props.order_id)

        
    }

    render () {
        console.log(this.props)

        return (
            <div>
                <button className='add_to_cart'
                    onClick = {this.handleClick}>
                    Add to Cart</button>
            </div>
        )
    }
}

export default withRouter(OrderForm)