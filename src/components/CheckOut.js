import React from 'react'
import {withRouter} from 'react-router-dom'

import { Button } from 'semantic-ui-react'


class CheckOut extends React.Component {


    handleClick = () => {
        this.props.history.push("/profile")
    }
   
    render (){

        let {amount, card, city, exp_year, last4, postal_code, receipt, street} = this.props.transaction
        return (
            <div>
                <div id='receipt'>
                    <p>Foodies Road <br/>New York, NY, 12345</p>
                    <p>Thanks for the purchase {this.props.name}</p>
                    <p>Number Receipt: <span className='receiptProps'>{receipt}</span></p>
                    <p>Total Paid: <span className='receiptProps'>{amount}</span></p>
                    <p>Card Used: <span className='receiptProps'>{card}</span></p>
                    <p>Last 4 digits: <span className='receiptProps'>{last4}</span></p>
                    <p>Exp. Year: <span className='receiptProps'>{exp_year}</span></p>
                    <p> Your information: <span className='receiptProps'>{street}, {city}, {postal_code}</span></p>
                    <span> ****** COPY RECEIPT *****</span>
                </div>
                <Button id='checkoutRouterButton' onClick={this.handleClick} inverted color='blue'>
                    Your order should arrive in 45 minutes
                </Button>
            </div>
        )
    }
}

export default withRouter(CheckOut)