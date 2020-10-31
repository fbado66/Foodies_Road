import React, { Component } from 'react';

class CartForm extends Component {

//   state = {
//     history: false,
//     order_method: ''
//   }

//   handleSubmit = (e) => {
//     e.preventDefault()

//     fetch('http://localhost:3000/carts', {
//       method: "POST",
//       headers: {
//         "Content-type": "Application/json",
//         "authorization": this.props.token
//       },
//       body: JSON.stringify({
//         order_method: this.state.order_method
//       })
//     })
//     .then(res => res.json())
//     .then(createdCart => {
//     })


//   }

//   handleChange = (e) => {
//     let {name, value} = e.target
//     this.setState({
//       [name]: value
//     })
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>

//         <label>Order Method:</label>

//         <input type="text" 
//         autoComplete="off" 
//         name="order_method" 
//         value={this.state.order_method} 
//         onChange={this.handleChange} />

//         <input type="submit" value="My Cart" />

//       </form>
//     );
//   }

// }
}

export default CartForm;