// import { Button } from '@material-ui/core';
import React from 'react';
import {withRouter} from 'react-router-dom'
import { Button } from 'semantic-ui-react';




class OrderForm extends React.Component {


    handleClick = (evt) => {
        evt.preventDefault()
        if (this.props.token) {
            fetch('https://frozen-sands-83347.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json',
                "authorization": this.props.token
            },
            body: JSON.stringify({
                cart_id: this.props.cart_id,
                product_id: this.props.product_id,
                quantity: 1
            })
        })

        .then(res => res.json())
        .then((createdOrder) => {
            this.props.addOrderToState(createdOrder)
        })
        } else {
            this.props.history.push("/login")
        } 
    }

    render () {
        return (
            <div>
                <Button inverted color='blue' id='add-to-cart' onClick = {this.handleClick} >
                    <Button.Content visible>Add to Cart </Button.Content>
                </Button>
            </div>
        )
    }
}

export default withRouter(OrderForm)