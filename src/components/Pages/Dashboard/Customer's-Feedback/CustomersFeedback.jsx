import React, { useEffect, useState } from 'react';
import data from '../../../../assets/data/customers-feedback.json'; // Adjust the path as needed
import classes from './CustomersFeedback.module.css';

export default function CustomersFeedback() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setReviews(data);
  }, []);

  return (
    <div className={classes.reviewsContainer}>
      <p  className={classes.reviewsHeading}>Customer's Feedback</p>
      <div className={classes.reviewsList}>
        {reviews.map((review, index) => (
          <div key={index} className={classes.review}>
            <div className={classes.customerName}>{review.name}</div>
            <div className={classes.rating}>
              {'★'.repeat(review.rating) + '☆'.repeat(5 - review.rating)}
            </div>
            <div className={classes.description}>{review.feedback}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
