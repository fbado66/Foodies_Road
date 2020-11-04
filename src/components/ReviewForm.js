import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'


class ReviewForm extends Component {

    state = {
        content: "",
        rating: ''
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
            rating: ''
        })
        
    }


    handleChange = (e) => {
        let {name, value} = e.target
        this.setState({
            [name]: value
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

                    <label className = '' htmlFor="rating">rating:</label>
                        <input type="number" autoComplete="off" name="rating" 
                        value={this.state.rating} onChange={this.handleChange}/>
            
                    <input className= 'createReview' type="submit" value="Share with us"/>
                </form>
            </div>
        );
    }

}

export default withRouter(ReviewForm);