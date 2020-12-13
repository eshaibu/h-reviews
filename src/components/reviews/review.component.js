import { shape, number, string, instanceOf, oneOfType } from 'prop-types';
import { mLeft16, reviewDiv, feedbackDiv, scoreDiv, reviewHeader } from './reviews.style';
import { ReactComponent as holiduIcon } from '../../assets/icons/HOLIDU.svg';
import { ReactComponent as airbnbIcon } from '../../assets/icons/AIRBNB.svg';
import { ReactComponent as bookingcomIcon } from '../../assets/icons/BOOKINGCOM.svg';
import thumbUpIcon from '../../assets/icons/thumb-up.svg';
import thumbDownIcon from '../../assets/icons/thumb-down.svg';

const logoMap = {
  HOLIDU: holiduIcon,
  AIRBNB: airbnbIcon,
  BOOKINGCOM: bookingcomIcon,
};

export const Review = (props) => {
  const { review } = props;
  const ChannelIcon = logoMap[review.channel];
  return (
    <div className={reviewDiv}>
      <div className={reviewHeader}>
        <div className={scoreDiv}>
          <span>{review.score}&nbsp;</span>
          <span>/&nbsp;5</span>
        </div>
        <ChannelIcon className={mLeft16} />
      </div>
      <p className="">{review.headline}</p>
      <p>{review.comment}</p>
      {review.positiveFeedback && (
        <div className={feedbackDiv}>
          <img src={thumbUpIcon} alt="thumbs up" />
          <span>{review.positiveFeedback}</span>
        </div>
      )}
      {review.negativeFeedback && (
        <div className={feedbackDiv}>
          <img src={thumbDownIcon} alt="thumbs down" />
          <span>{review.negativeFeedback}</span>
        </div>
      )}
      <p className="author">{review.author}</p>
      <p className="published">{review.publishedAt}</p>
    </div>
  );
};

Review.propTypes = {
  review: shape({
    score: number,
    headline: string,
    comment: string,
    channel: string,
    positiveFeedback: oneOfType([string, instanceOf(null)]),
    negativeFeedback: oneOfType([string, instanceOf(null)]),
    author: string,
    publishedAt: string,
  }),
};
