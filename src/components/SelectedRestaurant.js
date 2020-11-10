import React from 'react'
import { withRouter} from 'react-router-dom'
import Product from './Product'
import ReviewForm from './ReviewForm'
import ReviewsOnRestaurant from './ReviewsOnRestaurant'



class SelectedRestaurant extends React.Component {

    // ----------------------------- R E V I E W S -----------------------------
    state = {
        reviews: []
    }

    componentDidMount = () => {
    fetch(`http://localhost:3000/restaurants/${this.props.restaurant.id}`)
        .then(res => res.json())
        .then((restaurantPojo) => {
            this.setState({
                reviews: restaurantPojo.reviews})
            })
    }  

 //  ----- UPDATE STATE WHEN ADDING A NEW REVIEW ----------
    addReviewToState = (newlyReview) => {
        let copyOfReviews = [...this.state.reviews, newlyReview]
        this.setState({
        reviews: copyOfReviews
        })
    }

//  ----- UPDATE STATE WHEN DELETING A REVIEW ----------
    deleteReviewFromState = (deletedID) => {
        let copyOfReviews = this.state.reviews.filter(orderObj => {
          return orderObj.id !== deletedID
        })
        this.setState({
          reviews: copyOfReviews
        })
      }   

//  ----- UPDATE STATE WHEN UPDATING A REVIEW ----------
    updatedReviewFromState = (updatedObj) => {
        let copyOfReviews = this.state.reviews.map((review) => {
          if(review.id === updatedObj.id){
            return updatedObj
          } else {
            return review
          }
        })
        this.setState({
          review: copyOfReviews
        })
      }
    

    // -------------- D I S P L A Y    P R O D U C T S ------------------------- 
    handleClick = (evt) => {
        this.props.changeSelectedCategory(evt.target.value)
    }

    render () {
        let allReviews = this.state.reviews.map(reviewPojo => {
            return <ReviewsOnRestaurant
                        key = {reviewPojo.id}
                        review ={reviewPojo}
                        token = {this.props.token} 
                        user_id = {this.props.user_id}
                        deleteReviewFromState = {this.deleteReviewFromState}
                        updatedReviewFromState = {this.updatedReviewFromState}
                        />
        })
        let arrayOfProducts = this.props.productsFiltered.map(productPojo => {
            return <div key = {productPojo.id}>            
                        <Product
                        order = {productPojo}
                        // productsFiltered = {this.props.productsFiltered}
                        addOrderToState = {this.props.addOrderToState} 
                        addOrderToCartState = {this.props.addOrderToCartState}
                        cart_id={this.props.cart_id}
                        token = {this.props.token} />  
                    </div>
        })

        return (
            <div>
                <ul className ='category-subNav' value={this.selectedCategory} onClick = {this.handleClick} >
                    <option value='All'> All</option>
                    <option value='Specialties'> Specialties</option>
                    <option value='Popular'> Popular</option>
                    <option value='Roots'> Our Roots</option>
                    <option value='Signature'> Signature Dishes</option> 
                    <option value='Drinks'> Drinks</option> 

                </ul>
                <div className ='products_holder'>
                    {arrayOfProducts}
                </div>
                <ReviewForm 
                restaurant = {this.props.restaurant}
                token = {this.props.token} 
                addReviewToState = {this.addReviewToState}/>
                {allReviews}
            </div>
        )
    }
}

export default withRouter(SelectedRestaurant)