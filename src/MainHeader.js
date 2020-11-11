import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Header, Segment, Button, Icon } from 'semantic-ui-react'


function MainHeader(props) {

    let logged = 'Log In'
    let profile = 'Profile'

    if (props.token){
        logged = 'LOG OUT'
        profile = `Hi ${props.name}!`
    }
    
    if (props.cart.length > 0) {
        if (props.orderNumber.length === 0  ){
            return <div >
                        <Segment clearing id='header_ui'>
                            <Header floated='right'>
                                <Button basic color='red' animated as={Link} to={'/login'}>
                                    <Button.Content visible>{logged}</Button.Content>
                                    <Button.Content hidden><Icon name='arrow right' /></Button.Content>
                                </Button>

                                <Button basic color ='red' animated as={Link} to={'/profile'}>
                                    <Button.Content hidden>View Profile</Button.Content>
                                    <Button.Content visible>{profile}</Button.Content>
                                </Button>

                                <Button basic color='red' animated='vertical' as={Link} to={'/cart'}>
                                    <Button.Content hidden>My Cart</Button.Content>
                                    <Button.Content visible><Icon name='shop' /></Button.Content>
                                </Button>  
                            </Header>
                            <Header floated='left'>
                                <NavLink to='/'>Foodies Road</NavLink> 
                            </Header>
                        </Segment>
                    </div>
            }else {
                return(<Segment clearing id='header_ui'>
                            <Header floated='right'>
                                <Button basic color='red' animated as={Link} to={'/login'}>
                                    <Button.Content visible>{logged}</Button.Content>
                                    <Button.Content hidden><Icon name='arrow right' /></Button.Content>
                                </Button>

                                <Button basic color ='red' animated as={Link} to={'/profile'}>
                                    <Button.Content hidden>View Profile</Button.Content>
                                    <Button.Content visible>{profile}</Button.Content>
                                </Button>

                                <Button basic color='red' animated='vertical' as={Link} to={'/cart'}>
                                    <Button.Content hidden>My Cart</Button.Content>
                                    <Button.Content visible><span className='count'>{props.orderNumber.length} </span><Icon name='shop' /></Button.Content>
                                </Button>  
                            </Header>
                            <Header floated='left'>
                                <NavLink to='/'>Foodies Road</NavLink> 
                            </Header>
                        </Segment>
                )
            }
        } else {
            return <div>
                        <Segment clearing id='header_ui'>
                            <Header floated='right'>
                                <Button basic color='red' animated as={Link} to={'/login'}>
                                    <Button.Content visible>{logged}</Button.Content>
                                    <Button.Content hidden><Icon name='arrow right' /></Button.Content>
                                </Button>

                                <Button animated negative as={Link} to={'/register'}>
                                    <Button.Content visible>Sign Up</Button.Content>
                                    <Button.Content hidden><Icon name='universal access' /></Button.Content>
                                </Button>

                                <Button basic color ='red' as={Link} to={'/profile'}>
                                    <Button.Content visible>{profile}</Button.Content>
                                </Button>

                                {/* <Button basic color='red' animated='vertical' as={Link} to={'/cart'}>
                                    <Button.Content hidden>My Cart</Button.Content>
                                    <Button.Content visible><Icon name='shop' /></Button.Content>
                                </Button>   */}
                            </Header>
                            <Header floated='left'>
                                <NavLink to='/'>Foodies Road</NavLink> 
                            </Header>
                        </Segment>
                   </div>
    }
}

export default MainHeader