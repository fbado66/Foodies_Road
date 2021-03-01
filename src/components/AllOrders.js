import React from 'react';
import CartContainer from './CartContainer';
import TotalOrder from './TotalOrder'


class AllOrders extends React.Component {
    
    render () {
      
        if (this.props.allOrders === undefined) {
            return( <div>
                Empty cart
            </div>)
        }else {
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
                    <h4 id='promotion'>{promotion}</h4>

                        {arrayOfOrders}
                  
                    <TotalOrder orders = {this.props.allOrders}
                    user_token = {this.props.user_token}
                    setNewCartToState = {this.props.setNewCartToState}
                    setTransactionInfoToState = {this.props.setTransactionInfoToState}
                    resetStateforOrderNum = {this.props.resetStateforOrderNum}/>
                </div>
            )
        } 
    }
    
}

export default AllOrders