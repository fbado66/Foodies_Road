import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import StarRatingComponent from 'react-star-rating-component'
import { Form} from 'semantic-ui-react';


class ReviewForm extends Component {

    state = {
        content: "",
        rating: 0
    }

    handleReviewForm = (evt) => {
        evt.preventDefault()
        if (this.props.token) {
            fetch('https://frozen-sands-83347.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json',
                "authorization": this.props.token
            },
                body: JSON.stringify({
                    restaurant_id: this.props.restaurant.id,
                    content: this.state.content,
                    rating: this.state.rating
                })
            })

            .then(res => res.json())
            .then((createdReview) => {
                this.props.addReviewToState(createdReview)
            })
        } else {
            this.props.history.push("/login")
        }

        this.setState({
            content: '',
            rating: 0
        })
        
    }

    handleChange = (e) => {
        let {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    onStarClick = (nextValue) => {
        this.setState({rating: nextValue
        })
    }


    render () {
        return (
            <div className ='reviewForm'>
                <form onSubmit={this.handleReviewForm}>
                    <h4>Reviews</h4>
                        <Form>
                            <StarRatingComponent 
                                name="rating" starCount={5}
                                onStarClick={this.onStarClick} /* on icon click handler */
                                value={this.state.rating} 
                            />
                            <Form.TextArea label='Share with us' 
                            placeholder="Please provide a rating star, and Let us know about your experience... " 
                            name="content" 
                            id='leaveReviewForm'
                            value={this.state.content} onChange={this.handleChange} />
                        </Form>
                    <input className= 'createReviewButton' type="submit" value="Share"/>
                </form>
            </div>
        );
    }

}

export default withRouter(ReviewForm);