import React from 'react';
import './App.css';
import Header from "./Header"
import Footer from './Footer'
import Home from './Home'
import Restaurant from './Restaurant'
import NotFound from './NotFound'
import SelectedRestaurant from './components/SelectedRestaurant'
import allOrders from './components/AllOrders'
import CartContainer from './components/CartContainer'
import {Route, Switch, Link, withRouter} from 'react-router-dom'
import AllOrders from './components/AllOrders';
import LogInForm from './LogInForm'
import RegisterForm from "./RegisterForm"
import CartForm from './components/CartForm';
import CategoryNavBar from './components/CategoryNavBar';
import ReviewsOnRestaurant from './components/ReviewsOnRestaurant';
import FilterRestaurantByLocation from './components/FilterRestaurantByLocation';
require('dotenv').config()




class App extends React.Component {

  state = {
    id: 0,
    restaurants: [],
    orders: [],
    token: '',
    name: '',
    cart_id: '',
    products: [],
    selectedCategory: 'All',
    restaurant_id: 1
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
        cart_id: cartPojo.id
      })
    })
      // this.props.history.push("/profile")
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
      // resp.user.carts.map( cart => {
      //   console.log(cart.id)
      // })
      localStorage.token = resp.token
      this.setState({
        id: resp.user.id,
        name: resp.user.name,
        orders: resp.user.orders,
        token: resp.token,
        

      })
      // this.props.history.push("/profile")
    }
  }


  renderRestaurants = () => {

    
    let arrayOfRestaurants = this.state.restaurants.map((restaurantPojo) => {
      return (
            <div className ='restaurant-card'
                key={restaurantPojo.id}
                >            
              <Link to={`/restaurants/${restaurantPojo.id}`}>
                <img className ='restaurant-image' src ={restaurantPojo.image_url} alt={restaurantPojo.name} />
                <h2 className= 'restaurant-title'> {restaurantPojo.name}</h2>
                <p> {restaurantPojo.address}</p>
              </Link>
            </div>
            
      ) 
    })
    return (
      <Restaurant 
        restaurants={arrayOfRestaurants}
        allRestaurants = {this.state.restaurants}
        sortRestaurants = {this.sortRestaurants}
        
      />
    )
  }


  renderAllOrders = () =>{
    if (localStorage.token) {
    let allOrders = this.state.orders
    return <AllOrders 
    allOrders = {allOrders} 
    deleteOrderFromState = {this.deleteOrderFromState}
    updateOrderFromState = {this.updateOrderFromState} 
    />
  }
}

// ---- RESTAURANT LOCATIONS ON LAT AND LNG --------------------------
renderAllLocations = () =>{
  let allLocations = this.state.restaurants.map(restaurantPojo => {
    
    return (
      <div 
        restaurantPojo = {restaurantPojo}
        latitude = {restaurantPojo.latitude}
        longitude = {restaurantPojo.longitude}>
      </div>
    )
  })
  return <div>
            <Home allLocations = {allLocations}/>
            </div>
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
        return <button className='logout' onClick={this.handleLogOut}>Logged in as {this.state.name}</button>
      }
      if(routerProps.location.pathname === "/login"){
        return <LogInForm
                formName="Login Form"
                handleSubmit={this.handleLoginSubmit}
              />
        
      } else if (routerProps.location.pathname === "/register") {
        return <RegisterForm
                formName="Register Form"
                handleSubmit={this.handleRegisterSubmit}
              />
      } 
  
    }

  render() {
    
    return (
      <div className="App">
        <Header orderNum = {this.state.orders.length}/>

          <main>
            <Switch>
              <Route path="/login" render={ this.renderForm } />
              <Route path="/register" render={ this.renderForm } />
              <Route path ='/' exact render={this.renderAllLocations} />
              <Route path ='/restaurants' exact render = {this.renderRestaurants} />
              <Route path ='/restaurants/:id' exact render = {this.renderSpecificRestaurant} /> 
              <Route path = '/cart' exact render={this.renderAllOrders} />
              <Route path = '/mycart' 
              // exact render={this.myCart} 
              />
              <Route path = '/yolo' exact component={CartForm} />


            </Switch>
          </main>
        <Footer />
      </div>

    );
    
  }


}
export default withRouter(App);
