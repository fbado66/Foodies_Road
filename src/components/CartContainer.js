import React from 'react'
import OrderForm from './OrderForm'

class CartContainer extends React.Component {

   

// -----------Delete Functionality ------------------------
    deleteHandler = (evt) => {
            // evt.preventDefault()

        // console.log(evt.target.id)
        fetch(`http://localhost:3000/orders/${this.props.order.id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then((deletedObj) => {
                this.props.deleteOrderFromState(deletedObj.id)
            })
    }


    // Update Functionality -------------------------

    decreaseQuantityHandler = (evt) => {

        if (this.props.order.quantity > 1) {

            fetch(`http://localhost:3000/orders/${this.props.order.id}`, {
                method: 'PATCH',
                headers: {
                    "content-type": "Application/json"
                },
                body: JSON.stringify({
                    quantity: this.props.order.quantity - 1
                })
            })
            .then(res => res.json())
            .then(updatedOrder => {
                this.props.updateOrderFromState(updatedOrder)
            })

            } else {
                fetch(`http://localhost:3000/orders/${evt.target.id}`, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then((deletedObj) => {
                    this.props.deleteOrderFromState(deletedObj.id)
                })
        }
    }

    increaseQuantityHandler = (evt) => {
        // console.log(this.props.order.quantity)

        fetch(`http://localhost:3000/orders/${this.props.order.id}`, {
            method: 'PATCH',
            headers: {
                "content-type": "Application/json"
            },
            body: JSON.stringify({
                quantity: this.props.order.quantity + 1
            })
        })
        .then(res => res.json())
        .then(updatedOrder => {
            this.props.updateOrderFromState(updatedOrder)
        })

    }


    render () {
        console.log(this.props)
        let {id, product, quantity} = this.props.order
        let {name, image_url, price} = product
  
            return <div
                        key = {id}>
                        <p>{name}</p>
                        <img className ='product-image' src={image_url} alt ={name} />
                        <p>$ {price}</p>
                        <p>quantity:
                            <button
                            id = {id}
                            onClick = {this.decreaseQuantityHandler}> - </button>
                            {quantity}
                            <button
                            id = {id}
                            onClick = {this.increaseQuantityHandler}> + </button></p>
                        <button
                        id = {id}
                        onClick = {this.deleteHandler}> Delete</button>

                    </div>

    }
}

export default CartContainer