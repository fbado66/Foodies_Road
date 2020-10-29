import React from 'react';

class OrderForm extends React.Component {


    handleClick = (evt) => {
        evt.preventDefault()
        console.log(this.props.product.name)

        fetch('http://localhost:3000/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify({
                cart_id: 1,
                product_id: this.props.product.id,
                quantity: 1
            })
        })

        .then(res => res.json())
        .then((createdOrder) => {
            console.log(createdOrder)
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