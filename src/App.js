import React from 'react';
import './App.css';
import Header from "./Header"
import Footer from './Footer'
import Home from './Home'
import Restaurant from './Restaurant'
import {Route, Switch, Link} from 'react-router-dom'



class App extends React.Component {

  state = {
    restaurants: []
  }

  componentDidMount(){

    fetch("http://localhost:3000/restaurants")
    .then(res => res.json())
    .then((arrayOfRestaurants) => {
      this.setState({
        restaurants: arrayOfRestaurants
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

  render() {
    // console.log(this.state.restaurants)
    return (
      <div className="App">
        <Header />

          <main>
            <Switch>

              <Route path ='/' exact component={Home} />
              <Route path ='/restaurants' render = {this.renderRestaurants} />

            </Switch>
          </main>


        <Footer />
      </div>

    );
    
  }


}
export default App;
