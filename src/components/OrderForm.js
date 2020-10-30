import React from 'react';

class OrderForm extends React.Component {

    state = {
        orders: []
    }



    // addOrderToState = (newCreatedOrder) => {
    //     let copyOfOrders = [...this.state.orders, newCreatedOrder]
    //     this.setState( {
    //       orders: copyOfOrders
    //     })
    //   }

    handleClick = (evt) => {
        evt.preventDefault()
        // console.log(this.props.order_id)

        fetch('http://localhost:3000/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify({
                cart_id: 1,
                product_id: this.props.product_id,
                quantity: 1
            })
        })

        .then(res => res.json())
        .then((createdOrder) => {
            // console.log(createdOrder)
            this.props.addOrderToState(createdOrder)
        })

    }


    render () {
        console.log(this.props)

        return (
            <div>
                <button
                    onClick = {this.handleClick}>
                        Add to Cart</button>
            </div>
        )
    }
}

export default OrderForm