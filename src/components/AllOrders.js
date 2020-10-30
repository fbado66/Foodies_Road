import React from 'react';
import CartContainer from './CartContainer';

class AllOrders extends React.Component {
    

    render () {
        let arrayOfOrders = this.props.allOrders.map(orderPojo => {
            return <div key = {orderPojo.id}>
                    <CartContainer 
                        order = {orderPojo} 
                        deleteOrderFromState = {this.props.deleteOrderFromState}
                        updateOrderFromState = {this.props.updateOrderFromState}
                    />
                    </div>
        })

        return (
            <div>
                {arrayOfOrders}
            </div>
        )
    }
}

export default AllOrders