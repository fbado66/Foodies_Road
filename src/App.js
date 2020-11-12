import React from 'react';
import './App.css';
import MainHeader from "./MainHeader"
import Footer from './Footer'
import Home from './Home'
import Restaurant from './Restaurant'
import NotFound from './NotFound'
import SelectedRestaurant from './components/SelectedRestaurant'
import {Route, Switch, Link, withRouter, Redirect} from 'react-router-dom'
import AllOrders from './components/AllOrders';
import LogInForm from './LogInForm'
import RegisterForm from "./RegisterForm"
import Profile from './components/Profile'
import UpdateUserForm from './components/UpdateUserForm'
import CheckOut from './components/CheckOut'
import Orderhandler from './components/Orderhandler';
import 'semantic-ui-css/semantic.min.css'



import { Grid, Image, Card, Icon } from 'semantic-ui-react'

require('dotenv').config()


class App extends React.Component {

  state = {
    id: 0,
    restaurants: [],
    orders: [],
    token: '',
    name: '',
    cart_id: '',
    cart: [],
    products: [],
    selectedCategory: 'All',
    selectedCusine: 'All',
    restaurant_id: 1,
    email: '',
    phone_number: '',
    address: '',
    transaction: '',
  }

  componentDidMount(){
    // Restaurants information -------------
    fetch("http://localhost:3000/restaurants")
    .then(res => res.json())
    .then((arrayOfRestaurants) => {
      this.setState({
        restaurants: arrayOfRestaurants,
      })
    })

    // fetch("http://localhost:3000/users")
    // .then(res => res.json())
    // .then((userArray) => {
    //   userArray.find(singleUser => {
    //       singleUser.carts.find(cartPOJO => {
    //         if (this.state.cart_id === cartPOJO.id)
    //           this.setState({
    //             cart: cartPOJO.orders
    //           })
    //       })
    //     })
    // })

 
    if(localStorage.token){
      fetch("http://localhost:3000/users/keep_logged_in", {
        method: "GET",
        headers: {
          "Authorization": localStorage.token
        }
      })
        .then(res => res.json())
        .then(this.helpHandleLogInResponse)
    
    }
  }

  handleLogOut = () => {
    this.setState({
      id: 0,
      name: "",
      orders: [],
      token: "",
      phone_number: '',
      address: '',
      email: '',
      transaction: '',
      cart_id: '',
      cart: []
    })
    localStorage.clear()
  }


  handleLoginSubmit = (userInfo) => {
    console.log("Login form has been submitted")

    fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({
        name: userInfo.name,
        password: userInfo.password
      })
    })
      .then(res => res.json())
      .then(this.helpHandleLogInResponse)

  }


  handleRegisterSubmit = (userInfo) => {
    console.log("Register form has been submitted")

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({
        name: userInfo.name,
        password: userInfo.password,
        email: userInfo.email,
        phone_number: userInfo.phone_number,
        address: userInfo.address
      })
    })
    .then(res => res.json())
    .then(this.helpHandleResponse)

  }


  helpHandleResponse = (resp) => {
    if(resp.error){
      console.error(resp.error)
    } else {
      localStorage.token = resp.token
      this.setState({
        id: resp.user.id,
        name: resp.user.name,
        orders: resp.user.orders,
        token: resp.token,
        phone_number: resp.user.phone_number,
        address: resp.user.address,
        email: resp.user.email,
      })

      fetch('http://localhost:3000/carts', {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        "authorization": this.state.token
      },
      body: JSON.stringify({
        method_order: 'delivery',
        history: false
      })
    })
    .then(res => res.json())
    .then((cartPojo) => {
      this.setState({
        cart_id: cartPojo.id,
        cart: cartPojo
      })
    })
      this.props.history.push("/profile")
    }
  }


  helpHandleLogInResponse = (resp) => {
    if(resp.error){
      console.error(resp.error)
    } else {
      resp.user.carts.map( cartObject => {
        this.setState({
          cart_id: cartObject.id
        })
      })
      localStorage.token = resp.token
      this.setState({
        id: resp.user.id,
        name: resp.user.name,
        orders: resp.user.orders,
        cart: resp.user.carts,
        token: resp.token,
        email: resp.user.email,
        address: resp.user.address,
        phone_number: resp.user.phone_number,
      })
      this.props.history.push("/profile")
    }
  }

  // HANDLE UPDATE REQUEST ON USER INFORMATION ------------------------
  handleUpdateSubmit = (userInfo) => {
    console.log("Update form has been submitted")

    fetch(`http://localhost:3000/users/${this.state.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({
        name: userInfo.name,
        password: userInfo.password,
        email: userInfo.email,
        phone_number: userInfo.phone_number,
        address: userInfo.address
      })
    })
    .then(res => res.json())
    .then((userInfo) => {
      this.setState({
        name: userInfo.name,
        password: userInfo.password,
        email: userInfo.email,
        phone_number: userInfo.phone_number,
        address: userInfo.address
      })
    })
    this.props.history.push("/profile")

  }

// {/* <div className ='restaurant-card'
//   key={restaurantPojo.id}
//   >            
// <Link to={`/restaurants/${restaurantPojo.id}`}>
//   {/* <img className ='restaurant-image' src ={restaurantPojo.image_url} alt={restaurantPojo.name} />
//   <h2 className= 'restaurant-title'> {restaurantPojo.name}</h2>
//   <p> {restaurantPojo.address}</p> */}


//   // GRID COLUMN GOES HERE

// </Link>
// </div>    */}

  renderRestaurants = () => {
    let restaurants = this.state.restaurants
    if (this.state.selectedCusine !== 'All'){
        restaurants = this.state.restaurants.filter(restaurant => {
        return restaurant.cuisines.includes(this.state.selectedCusine)
        })
    } 
    let arrayOfRestaurants = restaurants.map((restaurantPojo) => {
      return (
          <Grid.Column >
            <Card as={Link} to={`/restaurants/${restaurantPojo.id}`}>
              <Image className = 'image_restaurant' src={restaurantPojo.image_url ? restaurantPojo.image_url : "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} alt={restaurantPojo.name} />
                <Card.Content>
                  <Card.Header id='restaurant-name'>{restaurantPojo.name}</Card.Header>
                  <Card.Meta>{restaurantPojo.cuisines}</Card.Meta>
                  <Card.Description>{restaurantPojo.address}</Card.Description>
                  <Card.Description id='restaurant-phone'>{restaurantPojo.phone_number}</Card.Description>

                </Card.Content>
                <Card.Content id='restaurant-feedback' >
                  <div>{restaurantPojo.user_rating_text} <Icon name='food' /> </div>
                  {restaurantPojo.user_rating} <Icon name="star" /> ({restaurantPojo.reviews_count}+)
                </Card.Content>
            </Card>
          </Grid.Column>
      ) 
    })
      return (
      <Restaurant 
        restaurants={arrayOfRestaurants}
        allRestaurants = {this.state.restaurants}
        sortRestaurants = {this.sortRestaurants}
        changeSelectedCusine = {this.changeSelectedCusine}
      />
    )
  
  }


  renderAllOrders = () =>{
    if (localStorage.token) {
    let allOrders = this.state.orders.filter(cartPojo => {
      return cartPojo.cart_id === this.state.cart_id
        
    })
    return <div><AllOrders 
            allOrders = {allOrders}
            deleteOrderFromState = {this.deleteOrderFromState}
            updateOrderFromState = {this.updateOrderFromState} 
            setTransactionInfoToState = {this.setTransactionInfoToState}
            cart = {this.state.cart}
            user_token = {this.state.token}
            setNewCartToState = {this.setNewCartToState}
            resetStateforOrderNum = {this.resetStateforOrderNum}
            cart_id = {this.state.cart_id}
          />
          </div>
  }
}

renderCheckout = () =>{
  if (localStorage.token) {
    return <CheckOut
    transaction = {this.state.transaction}
    />
  }
}

setTransactionInfoToState = (transactionInfo) => {
  this.setState({
    transaction: transactionInfo
  })
}

setNewCartToState = (cartPojo) => {
  this.setState({
    // cart: cartPojo,
    cart_id: cartPojo.id
  })
}

resetStateforOrderNum = (num) => {
  this.setState({
    orderNum: num
  })
}

  renderSpecificRestaurant = (routerProps) => {
    let searchedRestaurant = routerProps.match.params.id
    let selectedRestaurant = this.state.restaurants.find((restaurantPojo) => {
      return restaurantPojo.id === parseInt(searchedRestaurant)
    })
    if (selectedRestaurant) {
      let productsFiltered = selectedRestaurant.products.filter(product => {
        if (this.state.selectedCategory !== 'All') {
          return (product.category === this.state.selectedCategory)
        } return (selectedRestaurant.products)})   
        
      return <SelectedRestaurant
                restaurant = {selectedRestaurant}
                productsFiltered = {productsFiltered}
                changeSelectedCategory = {this.changeSelectedCategory}
                addOrderToState = {this.addOrderToState} 
                cart_id={this.state.cart_id}
                token = {this.state.token}
                addReviewToState = {this.addReviewToState}
                reviews = {this.state.reviews}
                user_id = {this.state.id}
                name={this.state.name}
              />         
    }else {
      return <NotFound />
    }
  }

  // RENDER PRODUCTS BASED ON CATEGORY FOR SELECTED RESTAURANT HELPER --------
  changeSelectedCategory = (chosenCategory) => {
    this.setState({
      selectedCategory: chosenCategory
    })
  }


  // UPDATE STATE WHEN AN USER HAS SELECTED A SPECIFIC CUISINE OF RESTAURANTS TO RENDER ------
  changeSelectedCusine = (chosenCusine) => {
    this.setState({
      selectedCusine: chosenCusine
    })
  }

   // RE-ORDER RESTAURANT RENDER BASED ON USER INPUT ON THE SEARCH BAR  --------
   sortRestaurants = (newArray) => {
    this.setState({
      restaurants: newArray
    })
  }

  //  ----- UPDATE STATE WHEN ADDING A NEW ORDER ----------
  addOrderToState = (newCreatedOrder) => {
    let copyOfOrders = [...this.state.orders, newCreatedOrder]
    this.setState( {
      orders: copyOfOrders
    })
  }


    //  ----- UPDATE STATE WHEN DELETING AN ORDER ----------
  deleteOrderFromState = (deletedID) => {
    let copyOfOrders = this.state.orders.filter(orderObj => {
      return orderObj.id !== deletedID
    })
    this.setState({
      orders: copyOfOrders
    })
  }
  
    //  ----- UPDATE STATE WHEN UPDATING AN ORDER ----------
    updateOrderFromState = (updatedObj) => {
      let copyOfOrders = this.state.orders.map((order) => {
        if(order.id === updatedObj.id){
          return updatedObj
        } else {
          return order
        }
      })
      this.setState({
        orders: copyOfOrders
      })
    }

    // LOGIN / REGISTER FORM ------------------
    renderForm = (routerProps) => {
      if(this.state.token){
        return <button className='logout' onClick={this.handleLogOut}>LOG OUT {this.state.name}</button>
      }
      if(routerProps.location.pathname === "/login"){
        return <LogInForm
                formName="Login Form"
                handleSubmit={this.handleLoginSubmit}
              />
        
      } else if (routerProps.location.pathname === "/register") {
        return <RegisterForm
                formName="Register Form"
                handleRegisterSubmit={this.handleRegisterSubmit}
              />
      } 
    }

    // RENDER PROFILE COMPONENT -----------------------------------
    renderProfile = (routerProps) => {
      if(this.state.token){
        return <div>
                  <Profile
                    name={this.state.name} 
                    email={this.state.email}
                    phone_number={this.state.phone_number}
                    address={this.state.address}
                    orders = {this.state.orders}
                    transaction = {this.state.transaction}
                    user_id = {this.state.id}
                    cart = {this.state.orders}
                    cart_id = {this.state.cart_id}
                  />
                  <Orderhandler 
                  orders ={this.state.orders}
                  />
                  
                  
               </div> 
      } else {
        return <Redirect to="/login" />
      }
    
    }


    renderProfileUpdate = (routerProps) => {
      if(this.state.token){
        return <div>
                  <UpdateUserForm
                    name={this.state.name} 
                    email={this.state.email}
                    phone_number={this.state.phone_number}
                    address={this.state.address}
                    password={this.state.password}
                    user_id ={this.state.id}
                    handleUpdateSubmit={this.handleUpdateSubmit}
                  />
                  
               </div> 
      } else {
        return <Redirect to="/profile" />
      }
    
    }

  render() {
 
    return (
      <div className="App">
        <MainHeader 
                cart_id = {this.state.cart_id}
                cart = {this.state.cart}
                token = {this.state.token}
                name = {this.state.name}
                orderNumber = {this.state.orders.filter(cartPojo => {
                  return cartPojo.cart_id === this.state.cart_id
                })
              }
                  
        />
          <main>
            <Switch>
              <Route path="/login" render={ this.renderForm } />
              <Route path="/register" render={ this.renderForm } />
              <Route path ='/' exact component={Home} />
              <Route path ='/restaurants' exact render = {this.renderRestaurants} />
              <Route path ='/restaurants/:id' exact render = {this.renderSpecificRestaurant} /> 
              <Route path = '/cart' exact render={this.renderAllOrders} />
              <Route path = '/profile' exact render={this.renderProfile} />
              <Route path = '/mycart' exact component={AllOrders}/>
              <Route path = '/mycart/checkout' exact render={this.renderCheckout}/> 
              <Route path = '/profile/edit' exact render={this.renderProfileUpdate} />
            </Switch>
          </main>
        <Footer />
      </div>

    );
    
  }


}
export default withRouter(App);
