import React from 'react'
import {withRouter } from 'react-router-dom'
import { Accordion } from 'semantic-ui-react'


class Profile extends React.Component {

    state = {

    }

    handleClick = () => {
   this.props.history.push('/profile/edit')
    }

    
    arrayOfallOrders = this.props.cart.reduce((acc, {cart_id, product}) => {
        if(!acc[cart_id]) 
        acc[cart_id] = [<div id='orderNumber'>Order No. {cart_id}</div>];
        acc[cart_id].push(<div id='productsOnOrder' key ={Math.floor((Math.random()*25)+65) }>
                            <img className = 'profile_product_img' src= {product.image_url} />
                            {product.name}
                            ${product.price}.00
                          </div>)
                         
        return acc
    }, {})

    
    sortOrdersByCart = Object.values(this.arrayOfallOrders).map(groupedOrders => <div key ={Math.floor(Math.random()*2000)+1003 }>{groupedOrders}</div>)

    
      
      

    render() {




       






       
        return (
            <div >
                <h2>Welcome {this.props.name}</h2>
                <p>Email: {this.props.email}</p>
                <p>Phone: {this.props.phone_number}</p>
                <p>address: {this.props.address}</p>

                <button onClick={this.handleClick}>Update Information</button>

                <div>
                    <p>previous Transactions</p>
                    <div id='allTransactions'>
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