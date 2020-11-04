import React from 'react';

const ReviewsOnRestaurant = (props) => {

    // console.log(props.review)
    let {content, rating} = props.review
    return (
        <div>
            <p>content: {content}</p>
            <p>rating: {rating} </p>
        </div>
    )
}

export default ReviewsOnRestaurant