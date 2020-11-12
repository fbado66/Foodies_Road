import React from 'react'
import {withRouter } from 'react-router-dom'
import { Icon, Button } from 'semantic-ui-react'


class Profile extends React.Component {

    handleClick = () => {
        this.props.history.push('/profile/edit')
    }

    arrayOfallOrders = this.props.cart.reduce((acc, {cart_id, product}) => {
        if(!acc[cart_id]) 
        acc[cart_id] = [<div id='orderNumber'>Order No. {cart_id}</div>];
        acc[cart_id].push(<div id='productsOnOrder' key ={Math.floor((Math.random()*25)+65) }>
                            <img className = 'profile_product_img' src= {product.image_url} />
                            <p className='productNameOnCart'>{product.name} <br/>
                            ${product.price}.00</p>
                          </div>)
                         
        return acc
    }, {})

    sortOrdersByCart = Object.values(this.arrayOfallOrders).map(groupedOrders =>
        <div key ={Math.floor(Math.random()*2000)+1003 }>
            {groupedOrders}
        </div>
    )

    render() {
        return (
            <div >
                <h3>Welcome </h3>
                <div className='userInformation'>
                <Icon name='user circle' inverted color='blue' id='userAvatar'/> 
                    <p> {this.props.name} {this.props.last_name}</p>
                    <p><strong>Email: </strong>{this.props.email}</p>
                    <p><strong>Phone Number: </strong>{this.props.phone_number}</p>
                    <p><strong>Address:</strong> {this.props.address}</p>
                    <Icon name='settings' basic color='red' /><Button inverted color='red' onClick={this.handleClick}>Update Information</Button>
                </div>

                <div>
                    
                    <div id='allTransactions'>
                    <div id='historyOrders'>History Transactions</div>
                        {this.sortOrdersByCart}
                    </div>
                    {/* <p>{this.props.transaction.amount}</p> */}
                </div>












        
    
  


            </div>
        )
    }
}











//  above render 

    // test = this.props.cart.reduce((acc, {id, orders}) => {
    //     if(!acc[id]) acc[id] = [];
    //     acc[id].push(orders)
    //     return acc
    // }, {})


    // test = this.props.cart.map(transactions => {
    //     return transactions.orders.reduce((acc, {cart_id, product}) => {
    //             if(!acc[cart_id]) acc[cart_id] = [];
    //             acc[cart_id].push(product)
    //             return acc
    //         }, {})
    // })
    
    // test4 = this.props.cart.map(transaction => 
    //         <div key={transaction.id}>
    //             <h2>{transaction.id} </h2>
    //             {
    //                 transaction.orders.map(order => 
    //                     <div key={order.id}>
    //                         <p>{order.product.name} <br/>
    //                             ${order.product.price}.00
    //                         </p>
    //                         <img className='small_pic' src={order.product.image_url} />

    //                     </div>
    //                 )
    //             }
    // </div>
    //     )

export default withRouter(Profile)