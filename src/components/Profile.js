import React from 'react'
import {withRouter } from 'react-router-dom'

class Profile extends React.Component {

    handleClick = () => {
   this.props.history.push('/profile/edit')
    }

    
    arrayOfallOrders = this.props.cart.reduce((acc, {cart_id, product}) => {
        if(!acc[cart_id]) acc[cart_id] = [<h2>{cart_id}</h2>];
        acc[cart_id].push(<div key ={Math.floor((Math.random()*25)+65) }>
                            <h5>{product.name}</h5>
                            <img className = 'small_pic' src= {product.image_url} />
                            <p>${product.price}.00</p>
                             
                          </div>)
        return acc
    }, {})

    
    sortOrdersByCart = Object.values(this.arrayOfallOrders).map(groupedOrders => <div key ={Math.floor(Math.random()*2000)+1003 }>{groupedOrders}</div>)

    render() {
        // console.log(this.test5)
        // console.log(this.test6)
        return (
            <div >
                <h2>Welcome {this.props.name}</h2>
                <p>Email: {this.props.email}</p>
                <p>Phone: {this.props.phone_number}</p>
                <p>address: {this.props.address}</p>

                <button onClick={this.handleClick}>Update Information</button>

                <div>
                    <p>previous Transactions</p>
                    {this.sortOrdersByCart}
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