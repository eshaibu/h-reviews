import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from 'react-js-pagination';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import queryString from 'query-string';
import { paginationContainer, paginationStyle, reviewsContainer, title } from './reviews.style';
import { getReviews } from '../../redux/reviews';
import { limitsPerPage } from '../../utils/constants';
import { Review } from './review.component';

export const ReviewList = () => {
  const [_page, setCurrentPage] = useState(1);
  const [_limit, setLimit] = useState(10);
  const reviews = useSelector((state) => state.reviews);
  const { data, error, loading, totalCount } = reviews;

  const filterJsonString = JSON.stringify({ _page, _limit });

  const dispatch = useDispatch();

  useEffect(() => {
    const filterObject = JSON.parse(filterJsonString);
    const queryFilters = queryString.stringify(filterObject);
    console.log('queryFilters', queryFilters);
    dispatch(getReviews(queryFilters));
  }, [filterJsonString, getReviews]);

  const onLimitChange = (item) => {
    setLimit(parseInt(item.value, 10));
  };

  const onPageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={reviewsContainer}>
      {!loading && !error && (
        <>
          <h1 className={title}>{totalCount} Reviews</h1>
          {data.map((review, index) => (
            <Review review={review} key={index} />
          ))}
          <div className={paginationContainer}>
            <Dropdown onChange={onLimitChange} options={limitsPerPage} value={`${_limit}`} />
            <Pagination
              activePage={_page}
              itemsCountPerPage={_limit}
              totalItemsCount={totalCount}
              pageRangeDisplayed={5}
              onChange={onPageClick}
              innerClass={paginationStyle}
            />
          </div>
        </>
      )}
    </div>
  );
};
