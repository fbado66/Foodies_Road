import React from 'react';
import CartContainer from './CartContainer';

class AllOrders extends React.Component {
    

    render () {
        let arrayOfOrders = this.props.allOrders.map(orderPojo => {
            return <CartContainer 
                    key = {orderPojo.id}
                    order = {orderPojo} 
                    deleteOrderFromState = {this.props.deleteOrderFromState}
                    updateOrderFromState = {this.props.updateOrderFromState}
                    />
        })

    // console.log(this.props.allOrders)
        return (
            <div>
                {arrayOfOrders}
            </div>
        )
    }
}

export default AllOrders