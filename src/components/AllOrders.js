import React from 'react';
import CartContainer from './CartContainer';
import TotalOrder from './TotalOrder'

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
        let promotion = 'Get free Delivery with a purchase of $60.00 or more'
        if (arrayOfOrders.length === 0){
            promotion = ''
        }

        return (
            <div 
            // className ='cart-holder'
            >
                <h2 className ='My_cart'> My Cart</h2>
                <h3>{promotion}</h3>
                {arrayOfOrders}
                <TotalOrder orders = {this.props.allOrders}
                setTransactionInfoToState = {this.props.setTransactionInfoToState}/>
            </div>
        )
    }
}

export default AllOrders