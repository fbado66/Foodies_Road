import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import StarRatingComponent from 'react-star-rating-component'


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
    let {content, rating} = this.props.review
    if (this.props.user_id === this.props.review.user_id) {
        return <div>
                    <p>content: {content}</p>
                    <StarRatingComponent 
                        name="rating" 
                        starCount={5}
                        value={rating}
                    />
                    <div onClick = {this.handleDelete}>
                        <DeleteIcon />
                    </div>
                    <button onClick = {this.handleUpdate}>
                        update
                    </button>
                </div>
    } else {
        return <div>
                    <p>content: {content}</p>
                    <StarRatingComponent 
                        name="rating" 
                        starCount={5}
                        value={rating}
                    />
                </div>
               
    }
}
}

export default ReviewsOnRestaurant