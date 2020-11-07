import React from 'react'
import OrderForm from './OrderForm';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import DeleteIcon from '@material-ui/icons/Delete';


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
                return <div 
                // className='order_in_cart'
                        key = {id}>
                        <img className ='product_cart_image' src={image_url} alt ={name} />
                        <div className = 'product_name_price'>
                            <p className='product_cart_name'>{name}</p>
                            <p className ='product_cart_price'>${price}.00</p>
                        </div>
                        <div 
                        // className ='product_cart_quantity'
                        >quantity:
                            <div
                            //  className = 'arrowdown'
                                id = {id}
                                onClick = {this.decreaseQuantityHandler}>
                                <ArrowDropDownIcon /> 
                            </div>
                                {quantity}
                            <div 
                            // className = 'arrowup'
                                id = {id}
                                onClick = {this.increaseQuantityHandler}>
                                <ArrowDropUpIcon /> 
                            </div>
                        </div>
                        <div 
                        // className ='delete'
                            id = {id}
                            onClick = {this.deleteHandler}>
                                <DeleteIcon />
                        </div>    
                    </div>

    }
}

export default CartContainer