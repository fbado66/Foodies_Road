import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import StarRatingComponent from 'react-star-rating-component'
import { List, Icon } from 'semantic-ui-react';



class ReviewsOnRestaurant extends React.Component {
    
    state = {
        content: '',
        rating: ''
    }

// -----------Delete Functionality ------------------------
    handleDelete = (evt) => {
    // evt.preventDefault()
        fetch(`http://localhost:3000/reviews/${this.props.review.id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then((deletedObj) => {
                this.props.deleteReviewFromState(deletedObj.id)
            })
    }

    // -----------Update Functionality ------------------------
    handleUpdate = (evt) => {
        console.log('This will allow me to update the review, hopefully')
        // evt.preventDefault()
            fetch(`http://localhost:3000/reviews/${this.props.review.id}`, {
                method: "PATCH",
                headers: {
                    "content-type": "Application/json"
                },
                body: JSON.stringify({
                    content: this.state.content,
                    rating: this.state.rating
                })
            })
                .then(res => res.json())
                .then((updatedReview) => {
                    this.props.updatedReviewFromState(updatedReview)
                })
        }

        

    render() {

    let {content, rating, user_name} = this.props.review
    if (this.props.user_id === this.props.review.user_id) {

        return <List >
                <List.Item >
                    <List.Content className ='reviewOnDisplay'>
                        <List.Header id='author'><Icon color='black' name='user' />{user_name} 
                            <span id='starsOnReview'><StarRatingComponent name="rating" starCount={5} value={rating} /></span>
                        </List.Header>
                    </List.Content>
                    <List.Description id='review-content'>
                        {content} <span onClick = {this.handleDelete}> <DeleteIcon /> </span>
                    </List.Description>
                </List.Item>
            </List>

                
        } else {
        return <div>
                    <List >
                        <List.Item >
                            <List.Content className ='reviewOnDisplay'>
                                <List.Header id='author'><Icon color='black' name='user' />{user_name} 
                                    <span id='starsOnReview'><StarRatingComponent name="rating" starCount={5} value={rating} /></span>
                                </List.Header>
                            </List.Content>
                            <List.Description id='review-content'>{content} </List.Description>
                        </List.Item>
                    </List>
                </div>
        }
    }
}

export default ReviewsOnRestaurant