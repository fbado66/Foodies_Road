import React from 'react'
import StripeComponent from './StripeComponent'
import { Button } from 'semantic-ui-react';



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
        if (totalSum === 0) { return 'Your cart is empty champ'  

        }else {
            return (
                <div>
                    <div className='subtotalInfo'>
                        <p>Items Subtotal: <span id='moneyCount'>${ totalSum }.00</span></p>
                        <p> Sales Tax: <span id='moneyCount'>${tip}</span></p>
                        <p>Delivery fee: <span id='moneyCount'>{finaldelivery}</span></p>
                        <p>TOTAL: <span id='moneyCountTotal'>${total}</span></p>
                        <p id='tipHandler'>Add tip for the driver</p>
                    </div>

                    <Button inverted color='yellow' onClick = {handleTip} value={cashTip}> Cash </Button>
                    <Button inverted color='blue' onClick = {handleTip} value={tip10}> 10% </Button>
                    <Button inverted color='blue' onClick = {handleTip} value={tip15}> 15% </Button>
                    <Button inverted color='blue' onClick = {handleTip} value={tip20}> 20% </Button>
                    
                    <StripeComponent 
                        total = {total}
                        user_token = {this.props.user_token}
                        setNewCartToState = {this.props.setNewCartToState}
                        orders = {this.props.orders}
                        setTransactionInfoToState = {this.props.setTransactionInfoToState}
                        resetStateforOrderNum = {this.props.resetStateforOrderNum}/>
                </div>
            )
        }
    }
}

export default TotalOrder