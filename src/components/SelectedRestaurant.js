import React from 'react'
import { withRouter} from 'react-router-dom'
import CategoryNavBar from './CategoryNavBar'
import Product from './Product'


class SelectedRestaurant extends React.Component {
    
    handleClick = (evt) => {
        this.props.changeSelectedCategory(evt.target.value)
    }

    render () {
   
        let arrayOfProducts = this.props.productsFiltered.map(productPojo => {

            return <div key = {productPojo.id}>            
                        <Product
                        order = {productPojo}
                        // productsFiltered = {this.props.productsFiltered}
                        addOrderToState = {this.props.addOrderToState} 
                        cart_id={this.props.cart_id}
                        token = {this.props.token} />   
                    </div>
        })

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
            </div>
        )
    }
}

export default withRouter(SelectedRestaurant)