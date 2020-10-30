import React from 'react'
import CartContainer from './CartContainer'
import OrderForm from './OrderForm'

class Product extends React.Component {

   


    // Delete Action ------------------------
    // deleteHandler = (evt) => {
    //     evt.preventDefault()
    //     let order = this.state.orders.find(orderPojo => {
    //         console.log(orderPojo.id)
    //     })

    // }


    // render () {
    // let arrayOfOrders = this.state.orders.map(orderPojo => {
    //     let { name, image_url, price} = orderPojo.product
    //     return <div 
    //                 key = {orderPojo.id}>
    //                 <p>{name}</p>
    //                 <img className ='product-image' src={image_url} alt ={name} />
    //                 <p>$ {price}</p>
    //                 <button
    //                 onClick = {this.deleteHandler}> Delete</button>
    //             </div>
    // })

    //     return (
    //         <div>
    //             {arrayOfOrders}
    //             <p> Your total is: </p>
    //         </div>
    //     )
    // }

    render() {
        console.log(this.props.order.category)
        let {id, name, image_url, price} = this.props.order
        return(
            <div>
            <img className = 'product-image' src = {image_url} alt ={name} />
            <p>{name}</p>
            <p>{price}</p>
            <OrderForm 
            addOrderToState = {this.props.addOrderToState}
            product_id = {id}/>
            {/* <CartContainer 
            addOrderToState = {this.props.addOrderToState} /> */}
            </div>

        )
    }
}

export default Product