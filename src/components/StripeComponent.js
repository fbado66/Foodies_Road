import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

class StripeComponent extends React.Component { 

    state = {
        amount: '',
        receipt: '',
        card: '',
        last4: '',
        exp_year: '',
        city: '',
        street: '',
        postal_code: ''
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
                this.setState({
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

        console.log(this.state.amount, this.state.receipt)
        console.log(this.state.city, this.state.street, this.state.postal_code)
        console.log(this.state.card, this.state.last4, this.state.exp_year)
        

        return (
            <div>
                <StripeCheckout
                    token={ onToken }
                    stripeKey={ process.env.REACT_APP_STRIPE_API_KEY }
                    // provide input for billing address and shipping address.
                    billingAddress
                    shippingAddress
                >
                    <button>CHECKOUT PAY </button>
                </StripeCheckout>
            </div>
        );
    }
};

export default StripeComponent