import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reviewsContainer, title } from './reviews.style';
import { Review } from './review.component';
import { getReviews } from '../../redux/reviews';

export const ReviewList = () => {
  const reviews = useSelector((state) => state.reviews);
  const { data, error, loading } = reviews;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviews());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={reviewsContainer}>
      {!loading && !error && (
        <>
          <h1 className={title}>{reviews.data.length} Reviews</h1>
          {data.map((review, index) => (
            <Review review={review} key={index} />
          ))}
        </>
      )}
    </div>
  );
};
