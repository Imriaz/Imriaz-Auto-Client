import { Rating } from '@mui/material';
import React from 'react';
import './ShowReview.css'

const ShowReview = ({ item }) => {
    const { name, email, review, rating } = item;
    return (
        <div>
            <div class="col mb-5">
                <div class="card-review">
                    <div class="card-body">
                        <h2 class="card-title">{name}</h2>
                        <h5 class="card-text">{email}</h5>
                        <h5 class="card-text">{review}</h5>
                        <Rating name="read-only" value={rating} readOnly />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowReview;