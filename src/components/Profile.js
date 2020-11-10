import React from 'react'
import UpdateUserForm from './UpdateUserForm'
import {withRouter, Redirect } from 'react-router-dom'
import { ThreeSixtySharp } from '@material-ui/icons'

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
            return <div>Transaction ID:{transactions.id}
                        <div id={productPojo.product} >
                            <p>name: {productPojo.product.name}</p>
                        </div>
                    </div>
        })
    })

    render() {

        console.log(this.props.cart.map(cartPojo => {
            console.log(cartPojo.id)
        }))
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
                    {this.passTransactions}
                    <p>{this.props.transaction.amount}</p>
                </div>

            </div>
        )
    }
}

export default withRouter(Profile)