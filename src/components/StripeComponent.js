import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
// import CategoryNavBar from './CategoryNavBar'
import {withRouter} from 'react-router-dom'
// import CheckOut from './CheckOut'


class StripeComponent extends React.Component { 


    handleClick = () => {
        this.props.history.push("/mycart/checkout")
        
        fetch('http://localhost:3000/carts', {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
                "authorization": this.props.user_token
            },
            body: JSON.stringify({
            method_order: 'delivery',
            history: false
                })
        })
        .then(res => res.json())
        .then((cartPojo) => {
            this.props.setNewCartToState({
            cart_id: cartPojo.id
            })
        })
    }

    render(){
        let onToken = (token) => {
            // save the token id to a variable to then use it in the body of the fetch.
            const charge = {
                token: token.id
            };
            // fetch to the charge controller which handles the Stripe API transaction.
            fetch('http://localhost:3000/charges', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    // Stripe API need at least a token and a price.
                    charge: charge,
                    price: this.props.total * 100
                })
            })
            .then(res => res.json())
            .then(data => {
                this.props.setTransactionInfoToState({
                    amount: data.amount * 0.01,
                    receipt: data.created,
                    city: data.billing_details.address.city,
                    street: data.billing_details.address.line1,
                    postal_code: data.billing_details.address.postal_code,
                    card: data.payment_method_details.card.brand,
                    last4: data.payment_method_details.card.last4,
                    exp_year: data.payment_method_details.card.exp_year
                })
            })
        };

        return (
            <div>
                <StripeCheckout
                    token={ onToken }
                    stripeKey={ process.env.REACT_APP_STRIPE_API_KEY }
                    // provide input for billing address and shipping address.
                    billingAddress
                    shippingAddress
                >
                    <button onClick={this.handleClick}>CHECKOUT PAY </button>
                </StripeCheckout>
            </div>
        ); 
        
    }
    
};

export default withRouter(StripeComponent)