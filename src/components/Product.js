import React from 'react'
import OrderForm from './OrderForm'
import { Grid, Image, Card} from 'semantic-ui-react'


class Product extends React.Component {

    render() {

        let {id, name, image_url, price} = this.props.order   

            return(
                <Grid.Column className='grid-column-product'> 
                    <Card className='card_product'>
                        <Card.Content className='card-content'>
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
                            <Image className='food_image' src={image_url} alt={name} />
                        </Card.Content>
                    </Card>
                </Grid.Column>
            )
    }
}
    export default Product


