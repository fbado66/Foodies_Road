import React from 'react'
import OrderForm from './OrderForm'

class CartContainer extends React.Component {

   

    // -----------Delete Functionality ------------------------
    deleteHandler = (evt) => {
            // evt.preventDefault()

        // console.log(evt.target.id)
        fetch(`http://localhost:3000/orders/${evt.target.id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then((deletedObj) => {
                this.props.deleteOrderFromState(deletedObj.id)
            })

    }


    // Update Functionality -------------------------

    decreaseQuantityHandler = (evt) => {
        console.log(evt.target.id)

    }



    increaseQuantityHandler = (evt) => {
        console.log(this)

        fetch(`http://localhost:3000/orders/${evt.target.id}`, {
            method: 'PATCH',
            headers: {
                "content-type": "Application/json"
            },
            body: JSON.stringify({
                quantity: this.state.orders.quantity + 1
            })
        })

    }


    render () {
        console.log(this.props)

        let arrayOfOrders = this.props.allOrders.map(orderPojo => {
            let {name, image_url, price} = orderPojo.product
            return <div 
                        key = {orderPojo.id}>
                        <p>{name}</p>
                        <img className ='product-image' src={image_url} alt ={name} />
                        <p>$ {price}</p>
                        <p>quantity:
                            <button
                            id = {orderPojo.id}
                            onClick = {this.decreaseQuantityHandler}> - </button>
                            {orderPojo.quantity}
                            <button
                            id = {orderPojo.id}
                            onClick = {this.increaseQuantityHandler}> + </button></p>
                        <button
                        id = {orderPojo.id}
                        onClick = {this.deleteHandler}> Delete</button>

                    </div>
        })

        return (
            <div>
                {arrayOfOrders}
            </div>
        )

    }
}

export default CartContainer