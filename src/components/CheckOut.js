import { CardTravelSharp } from '@material-ui/icons'
import React from 'react'

class CheckOut extends React.Component {



   
    
    render (){

        

        

        let {amount, card, city, exp_year, last4, postal_code, receipt, street} = this.props.transaction
        return (
            <div>
                thanks for the purchase champs
                <p>Number Receipt: {receipt}</p>
                <p>Total Paid: {amount}</p>
                <p>Card Used: {card}</p>
                <p>Last 4 digits: {last4}</p>
                <p>Exp. Year: {exp_year}</p>
                <p> Your information: {street}, {city}, {postal_code}</p>

                <button>Your order will arrive in 20 minutes</button>

            </div>
        )
    }
}

export default CheckOut 