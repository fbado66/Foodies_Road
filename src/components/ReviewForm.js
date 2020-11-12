import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import StarRatingComponent from 'react-star-rating-component'

class ReviewForm extends Component {

    state = {
        content: "",
        rating: 0
    }

    handleReviewForm = (evt) => {
        evt.preventDefault()
        if (this.props.token) {
            fetch('http://localhost:3000/reviews', {
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
            <div className =''>
                <form onSubmit={this.handleReviewForm}>
                    <h4>Review</h4>
                    <label htmlFor="">content:</label>
                        <input type="text" autoComplete="off" name="content" 
                        value={this.state.content} onChange={this.handleChange}/>
                    <StarRatingComponent 
                        name="rating" 
                        starCount={5}
                        onStarClick={this.onStarClick} /* on icon click handler */
                        value={this.state.rating} 
                    />
                    <input className= 'createReview' type="submit" value="Share"/>
                </form>



































                
            </div>
        );
    }

}

export default withRouter(ReviewForm);