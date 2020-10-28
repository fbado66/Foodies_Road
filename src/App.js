import React from 'react';
import './App.css';



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

  render() {

    return (

      <div className="App">
        <h2>Foodies Road </h2>
      </div>
      
    );
    
  }


}
export default App;
