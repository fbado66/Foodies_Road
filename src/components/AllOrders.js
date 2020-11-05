import React from 'react';
import CartContainer from './CartContainer';
import OrderTotal from './OrderTotal';

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
            <div className ='cart-holder'>
                <h2 className ='My_cart'> My Cart</h2>
                {arrayOfOrders}
                <OrderTotal 
                    orders = {this.props.allOrders}
                />
                
            </div>
        )
    }
}

export default AllOrders