import React from 'react'
// import OrderForm from './OrderForm';
import DeleteIcon from '@material-ui/icons/Delete';
import { Grid, Image, Icon } from 'semantic-ui-react';



class CartContainer extends React.Component {

// -----------Delete Functionality ------------------------
    deleteHandler = (evt) => {
            // evt.preventDefault()
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
                fetch(`http://localhost:3000/orders/${this.props.order.id}`, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then((deletedObj) => {
                    this.props.deleteOrderFromState(deletedObj.id)
                })
        }
    }

    increaseQuantityHandler = (evt) => {
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
        let {id, product, quantity} = this.props.order
        let {name, image_url, price} = product        
            return  <Grid key = {id}>
                        <Grid.Column width={4} id='product_image_cart'>
                            <Image src={image_url} alt ={name} />
                        </Grid.Column>
                        <Grid.Column width={5} id='product_cart_details'><strong>{name}</strong><br/><span id='product_price_cart'>${price}.00</span></Grid.Column>
                        <Grid.Column width={1} ><span id={id} onClick={this.decreaseQuantityHandler}><Icon id='update_order' name='chevron down'/></span> </Grid.Column>
                        <Grid.Column width={1} id='update_order_number'>{quantity}</Grid.Column> 
                        <Grid.Column width={1} ><span id={id} onClick={this.increaseQuantityHandler}><Icon id='update_order' name='chevron up'/> </span> </Grid.Column>
                        <Grid.Column width={2}><span id={id} onClick={this.deleteHandler}><Icon id='update_order' name='trash' /></span></Grid.Column>
                    </Grid>
    }
}

export default CartContainer