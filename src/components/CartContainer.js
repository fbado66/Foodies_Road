import React from 'react'

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



    render () {
    let arrayOfOrders = this.state.orders.map(orderPojo => {
        let {name, image_url, price} = orderPojo.product
        return <div 
                    key = {orderPojo.id}>
                    <p>{name}</p>
                    <img className ='restaurant-image' src={image_url} alt ={name} />
                    <p>$ {price}</p>
                    <button> Delete</button>
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