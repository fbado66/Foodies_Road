import React from 'react';
import './App.css';
import Header from "./Header"
import Footer from './Footer'
import Home from './Home'
import Restaurant from './Restaurant'
import NotFound from './NotFound'
import SelectedRestaurant from './components/SelectedRestaurant'
import CartContainer from './components/CartContainer'
import {Route, Switch, Link} from 'react-router-dom'



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


  renderSpecificRestaurant = (routerProps) => {
    let searchedRestaurant = routerProps.match.params.id
    let selectedRestaurant = this.state.restaurants.find((restaurantPojo) => {
      return restaurantPojo.id === parseInt(searchedRestaurant)
    })

    if (selectedRestaurant) {
      return <SelectedRestaurant
              restaurant = {selectedRestaurant}
              addOrderToState = {this.addOrderToState} />
      
    }else {
      return <NotFound />
    }
  }

  // renderCart = () => {
  //   let productOnCart = this.state.orders.find(orderPojo => {
  //     return orderPojo.product_id
  //   })
  //   let foundProduct = this.state.products.filter((restPojo) => {
  //     return restPojo.id === parseInt(productOnCart)
  //   })
   
   
  //   if (foundProduct) {
  //     return <CartContainer product = {foundProduct} />
  //   } else {
  //     return <NotFound />
  //   }
  
  // }

  
  addOrderToState = (newCreatedOrder) => {
    let copyOfOrders = [...this.state.orders, newCreatedOrder]
    this.setState( {
      orders: copyOfOrders
    })
  }


  

  render() {
    
    // this.state.orders.map(orderPojo => {
    //   console.log(orderPojo.product_id)
    // })
    // this.state.restaurants.map(restPojo => {
    //   restPojo.products.map(orderPojo => {
    //     console.log(orderPojo.id)
    //   })
    // })
    console.log(this.state.orders.length)

    return (
      <div className="App">
        <Header />

          <main>
            <Switch>

              <Route path ='/' exact component={Home} />
              <Route path ='/restaurants' exact render = {this.renderRestaurants} />
              <Route path ='/restaurants/:id' exact render = {this.renderSpecificRestaurant} /> 
              <Route path = '/cart' exact component={CartContainer} />

            </Switch>
          </main>


        <Footer />
      </div>

    );
    
  }


}
export default App;
