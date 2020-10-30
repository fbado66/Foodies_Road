import React from 'react'
import OrderForm from './OrderForm'

class CartContainer extends React.Component {

    state = {
        orders: []
    }

    componentDidMount(){

        fetch("http://localhost:3000/users")
        .then(res => res.json())
        .then((userInformation) => {
            userInformation.map(arrayOfOrders => {
                this.setState({
                    orders: arrayOfOrders.orders
                })
            })
        })
    }



    // -----------Delete Functionality ------------------------
    deleteOrderFromState = (deletedID) => {
        let copyOfOrders = this.state.orders.filter(orderObj => {
          return orderObj.id !== deletedID
        })
        this.setState({
          orders: copyOfOrders
        })
    
      }




    deleteHandler = (evt) => {
        console.log(evt.target.id)
        // evt.preventDefault()
        fetch(`http://localhost:3000/orders/${evt.target.id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then((deletedObj) => {
                this.deleteOrderFromState(deletedObj.id)
            })

    }


    render () {
        
    let arrayOfOrders = this.state.orders.map(orderPojo => {
        let {name, image_url, price} = orderPojo.product
        return <div 
                    key = {orderPojo.id}>
                    <p>{name}</p>
                    <img className ='product-image' src={image_url} alt ={name} />
                    <p>$ {price}</p>
                    <button
                    id = {orderPojo.id}
                    onClick = {this.deleteHandler}> Delete</button>

                </div>
    })

        return (
            <div>
                {arrayOfOrders}

                <p> Your total is: </p>
            </div>
        )
    }
}

export default CartContainer