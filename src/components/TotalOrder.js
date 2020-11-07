import React from 'react'
import StripeComponent from './StripeComponent'

class TotalOrder extends React.Component {

    state = {
        tip: 0
    }


    render () {
        let totalSum = this.props.orders.reduce((agg, order) => {
            return agg + order.product.price * order.quantity
            }, 0)

        let tip = (totalSum * 0.08875).toFixed(2)

        let delivery = 5
            if (totalSum > 60) {delivery = 0  }

        let finaldelivery = ''
            if (delivery === 0) { finaldelivery = 'Free'
            }else { finaldelivery = '$ 5.00'}

        const subtotals = [
            {item: totalSum},
            {item: parseFloat(tip)},
            {item: delivery},
            {item: parseInt(this.state.tip)}
        ]

        let total = subtotals.reduce((allPrices, subtotal) => allPrices + subtotal.item, 0)

        let cashTip = 0
        let tip10 = totalSum * .1
        let tip15 = totalSum * 0.15
        let tip20 = totalSum * 0.2

        let handleTip = (evt) => {
            this.setState({
                tip: evt.target.attributes.value.textContent
            })
        }
        if (totalSum === 0) { return 'Your cart is empty' }

        return (
            <div>
                <p>Items Subtotal: ${ totalSum }.00</p>
                <p> Sales Tax: ${tip}</p>
                <p>Delivery fee: {finaldelivery}</p>
                <p>TOTAL: ${total}</p>
                <p>Add tip for the driver</p>
                <div onClick = {handleTip} value={cashTip}>Cash</div>  
                <div onClick = {handleTip} value={tip10}>10%</div>
                <div onClick = {handleTip} value={tip15}>15%</div>
                <div onClick = {handleTip} value={tip20}>20%</div>
                <StripeComponent />
            </div>
        )
    }
}

export default TotalOrder