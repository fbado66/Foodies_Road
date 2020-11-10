import React from 'react'
// import UpdateUserForm from './UpdateUserForm'
import {withRouter, Redirect } from 'react-router-dom'

class Profile extends React.Component {

    

    handleClick = () => {
   this.props.history.push('/profile/edit')
    }

    // ArrayOfOrders = this.props.orders.map(order => {
    //     return <div id ={order.id} >
    //         <p>{order.product.name}</p>
    //         <p>{order.product.price}</p>
    //         <img src={order.product.image_url} />
    //     </div>
    // })

    cartIDs = this.props.cart.map(cartPojo => {
        return cartPojo.id
    })

  
    passTransactions = this.props.cart.map(transactions => {
        return transactions.orders.map(productPojo => {
            return <div key={productPojo.id}>
                        Transaction ID:{transactions.id}
                        <div id={productPojo.product} >
                            <p>name: {productPojo.product.name}</p>
                        </div>
                    </div>
        })
    })



    test = this.props.cart.reduce((acc, {id, orders}) => {
        if(!acc[id]) acc[id] = [];
        acc[id].push(orders)
        return acc
    }, {})

    // test = this.props.cart.map(transactions => {
    //     transactions.reduce((acc, {id, orders}) => {
    //             if(!acc[id]) acc[id] = [];
    //             acc[id].push(orders)
    //             return acc
    //         }, {})
    // })
    test2 = Object.values(this.test).map( orderPOjo => {
        return orderPOjo.map(productPojo => {
            return productPojo.map(order => {
                return <p>{order.cart_id}
                <div>ORDER : {order.product.name}
                </div>
                </p>
            })
        })
    })
    
    test3 = this.props.cart.map(cartpojo => {
        return cartpojo.orders.map(orderpojo => {
            return <div>
                {cartpojo.id}
                <p>{orderpojo.product.name}</p>
            </div>
        })
    })
    
    

    render() {

        console.log(this.test2)
        console.log(this.test)
        console.log(this.props.cart)
        // console.log(this.props.cart.map(cartpojo => {
        //     return cartpojo.orders.map(orderpojo => {
        //         return <div>{orderpojo.product.name}
        //         {cartpojo.id}</div>
        //     })
        // }))

        // console.log(this.props.cart.map(cartPojo => {
        //     console.log(cartPojo.id)
        // }))
        return (
            <div>
                <h2>Welcome {this.props.name}</h2>
                <p>Email: {this.props.email}</p>
                <p>Phone: {this.props.phone_number}</p>
                <p>address: {this.props.address}</p>

                <button onClick={this.handleClick}>Update Information</button>

                {/* <div>{this.ArrayOfOrders}</div> */}

                <div>
                    <p>previous Transactions</p>
                    {/* {this.passTransactions} */}
                    {this.test2}
                    <p>{this.props.transaction.amount}</p>
                </div>

            </div>
        )
    }
}

export default withRouter(Profile)