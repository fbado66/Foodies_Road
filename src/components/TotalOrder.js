import React from 'react'
import StripeComponent from './StripeComponent'
import Test from './Test'

class TotalOrder extends React.Component {


    handleClick2 = () => {
        console.log('hello')
    }
    render () {
        let totalSum = this.props.orders.reduce((agg, order) => {
            return agg + order.product.price * order.quantity
        }, 0)

        

        return (
            <div>
            <p>Total: ${ totalSum }.00</p>
                <StripeComponent />
            {/* <Test /> */}
            </div>
        )
    }
}

export default TotalOrder