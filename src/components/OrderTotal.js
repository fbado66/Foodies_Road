import React from 'react'

const OrderTotal = (props) => {
    let totalSum = props.orders.reduce((agg, order) => {
        return agg + order.product.price * order.quantity
    }, 0)


    return (
        <div>
           Total: ${ totalSum }.00
        </div>
    )
}

export default OrderTotal