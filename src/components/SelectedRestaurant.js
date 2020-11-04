import React from 'react'
import { withRouter} from 'react-router-dom'
import CategoryNavBar from './CategoryNavBar'
import Product from './Product'
import ReviewForm from './ReviewForm'
import ReviewsOnRestaurant from './ReviewsOnRestaurant'


class SelectedRestaurant extends React.Component {
    
    handleClick = (evt) => {
        this.props.changeSelectedCategory(evt.target.value)
    }

    render () {
        let allReviews = this.props.reviews.map(reviewPojo => {
            return <ReviewsOnRestaurant key = {reviewPojo.id} review ={reviewPojo} />
        })
   
        let arrayOfProducts = this.props.productsFiltered.map(productPojo => {

            return <div key = {productPojo.id}>            
                        <Product
                        order = {productPojo}
                        // productsFiltered = {this.props.productsFiltered}
                        addOrderToState = {this.props.addOrderToState} 
                        cart_id={this.props.cart_id}
                        token = {this.props.token} />  
                        {/* <ReviewsOnRestaurant 
                        review = {this.props.reviews} /> */}
                    </div>
        })
        // console.log(this.props.reviews)
        return (
            <div>
                <ul className ='category-subNav' value={this.selectedCategory} onClick = {this.handleClick} >
                    <option value='All'> All</option>
                    <option value='Steak'> Steak</option>
                    <option value='Chicken'> Chicken</option>
                    <option value='Soup'> Soup</option>
                    <option value='Salad'> Salad</option>
                    
                </ul>
                <div className ='products_holder'>
                    {arrayOfProducts}
                    
                </div>
                <ReviewForm 
                restaurant = {this.props.restaurant}
                token = {this.props.token} 
                addReviewToState = {this.props.addReviewToState}/>

                {allReviews}
            </div>
        )
    }
}

export default withRouter(SelectedRestaurant)