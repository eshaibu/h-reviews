import { reviewsContainer, title } from './reviews.style';
import { Review } from './review.component';

const reviews = [
  {
    headline: 'Amazing Pool!',
    comment:
      'Mauris justo ante, pulvinar eget consequat at, bibendum et lorem. Suspendisse lacus urna, fringilla sit amet commodo eget, condimentum et nisl. Pellentesque elit mi, porta in mi at, vulputate mattis lacus.',
    author: 'Alissa Stacey',
    positiveFeedback: 'The location is perfect',
    negativeFeedback: null,
    score: 4.1,
    channel: 'AIRBNB',
    publishedAt: '2020-08-11T12:20:02.340Z',
  },
  {
    headline: 'Very nice host, and quite chill place.',
    comment:
      'Nulla dictum ligula ac tortor egestas, sit amet ullamcorper risus sollicitudin. Morbi vitae leo accumsan, interdum ligula non, placerat ligula. Ut faucibus congue purus, vitae semper sapien viverra non. Pellentesque rhoncus porttitor diam, eu ultrices metus dictum at.',
    author: 'Alissa Stacey',
    positiveFeedback: 'The location is perfect',
    negativeFeedback: 'No parking spot.',
    score: 4,
    channel: 'HOLIDU',
    publishedAt: '2020-08-11T12:20:02.340Z',
  },
];

export const ReviewList = (props) => {
  return (
    <div className={reviewsContainer}>
      <h1 className={title}>17 Reviews</h1>

      {reviews.map((review, index) => (
        <Review review={review} key={index} />
      ))}
    </div>
  );
};
