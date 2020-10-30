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
import {Route, Switch, Link} from 'react-router-dom'
import AllOrders from './components/AllOrders';



class App extends React.Component {

  state = {
    restaurants: [],
    orders: []
    
  }

  componentDidMount(){

    fetch("http://localhost:3000/restaurants")
    .then(res => res.json())
    .then((arrayOfRestaurants) => {
     
      this.setState({
        restaurants: arrayOfRestaurants,
      
    })
    })

    fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then((response) => {
      response.map((arrayOfObjects) =>{
        this.setState({
          orders: arrayOfObjects.orders
        })
      })
    })

  }

  renderRestaurants = () => {
    let arrayOfRestaurants = this.state.restaurants.map((restaurantPojo) => {
      return (
        <Link
        key =  {restaurantPojo.id}
        to = {`/restaurants/${restaurantPojo.id}`}>
            {<div>
              <img className ='restaurant-image' src ={restaurantPojo.image_url} alt={restaurantPojo.name} />
              <h2> {restaurantPojo.name}</h2>
              <p> {restaurantPojo.address}</p>
            </div>}
        </Link>
      ) 
    })
    return (
      <Restaurant 
        restaurants={arrayOfRestaurants}
    
      />
    )
  }


  renderAllOrders = () =>{
    let allOrders = this.state.orders
    return <AllOrders 
    allOrders = {allOrders} 
    deleteOrderFromState = {this.deleteOrderFromState}
    updateOrderFromState = {this.updateOrderFromState} 
    />
  }


  renderSpecificRestaurant = (routerProps) => {
    let searchedRestaurant = routerProps.match.params.id
    let selectedRestaurant = this.state.restaurants.find((restaurantPojo) => {
      return restaurantPojo.id === parseInt(searchedRestaurant)
    })

    if (selectedRestaurant) {
      return <SelectedRestaurant
              restaurant = {selectedRestaurant}
              addOrderToState = {this.addOrderToState} 
              />
      
    }else {
      return <NotFound />
    }
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
  

















  render() {
    
    // console.log(this.state.orders)

    return (
      <div className="App">
        <Header />

          <main>
            <Switch>

              <Route path ='/' exact component={Home} />
              <Route path ='/restaurants' exact render = {this.renderRestaurants} />
              <Route path ='/restaurants/:id' exact render = {this.renderSpecificRestaurant} /> 
              <Route path = '/cart' exact render={this.renderAllOrders} />
              {/* <Route path = '/orders' exact component={this.renderAllOrders} /> */}



            </Switch>
          </main>


        <Footer />
      </div>

    );
    
  }


}
export default App;
