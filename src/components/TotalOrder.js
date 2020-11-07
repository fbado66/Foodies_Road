import React from 'react'
import StripeComponent from './StripeComponent'

class TotalOrder extends React.Component {


    render () {
        let totalSum = this.props.orders.reduce((agg, order) => {
            return agg + order.product.price * order.quantity
        }, 0)

        let tip = (totalSum * 0.08875).toFixed(2)

        let delivery = 5
        if (totalSum > 60) {
            delivery = 0  
        }

        let finaldelivery = ''
        if (delivery === 0) {
            finaldelivery = 'Free'
        }else {
            finaldelivery = '$ 5.00'
        }

        const subtotals = [
            {item: totalSum},
            {item: parseFloat(tip)},
            {item: delivery}
        ]

        let total = subtotals.reduce((allPrices, subtotal) => allPrices + subtotal.item, 0)

        return (
            <div>
            <p>Items Subtotal: ${ totalSum }.00</p>
            <p> Tax: ${tip}</p>
            
            <p>Delivery: {finaldelivery}</p>
            <p>TOTAL: ${total}</p>

                <StripeComponent />
            
            </div>
        )
    }
}

export default TotalOrder