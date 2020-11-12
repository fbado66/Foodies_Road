import React from 'react'
// import CartContainer from './CartContainer'
import OrderForm from './OrderForm'
import { Grid, Image, Card, Icon, GridColumn } from 'semantic-ui-react'
import CartContainer from './CartContainer'


class Product extends React.Component {

    render() {

        let {id, name, image_url, price} = this.props.order   

            return(<Grid.Column className = 'grid-column-product'>
                    <Card className = 'card_product'>
                        <Card.Content className = 'card-content'>
                            
                            <div className='product_info_holder'>
                            <Card.Header id='product-name'>{name}</Card.Header>
                            <Card.Meta>({Math.floor((Math.random()*1050)+65)} - {Math.floor((Math.random()*5000)+65)} Cal.)</Card.Meta>
                            <Card.Description>${price}.00</Card.Description>
                            <OrderForm 
                                addOrderToState = {this.props.addOrderToState}
                                addOrderToCartState = {this.props.addOrderToCartState}
                                product_id = {id}
                                cart_id = {this.props.cart_id}
                                token = {this.props.token} />
                            </div>
                            <Image className ='food_image' src = {image_url} alt ={name} />
                        </Card.Content>
                    </Card>
                </Grid.Column>



            //     <div className='product-card'>
            //        <img className = 'product-image' src = {image_url} alt ={name} />
            //         <p className = 'product_name'>{name}</p>
            //         <p className = 'product_price'>{price}</p>
                 
            //     <OrderForm 
            //         addOrderToState = {this.props.addOrderToState}
            //         addOrderToCartState = {this.props.addOrderToCartState}
            //         product_id = {id}
            //         cart_id = {this.props.cart_id}
            //         token = {this.props.token} />

            
            // </div>
            )
    }
}
    export default Product


