import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from 'react-js-pagination';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { paginationContainer, paginationStyle, reviewsContainer, title } from './reviews.style';
import { getReviews } from '../../redux/reviews';
import { limitsPerPage } from '../../utils/constants';
import { Review } from './review.component';
import Filter from '../filters';

export const ReviewList = () => {
  const [_page, setCurrentPage] = useState(1);
  const [_limit, setLimit] = useState(10);
  const [channels, setChannels] = useState([]);
  const [score, setScore] = useState('');

  const reviews = useSelector((state) => state.reviews);
  const { data, error, loading, totalCount } = reviews;

  const paginationString = JSON.stringify({ _page, _limit });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviews(paginationString));
  }, [paginationString, getReviews]);

  const onLimitChange = (item) => {
    setCurrentPage(1);
    setLimit(parseInt(item.value, 10));
  };

  const onPageClick = (page) => {
    setCurrentPage(page);
  };

  const filterCheckboxOnChange = (event) => {
    const { name, checked } = event.target;
    const updatedChannels = checked
      ? [...channels, name]
      : channels.filter((item) => {
          return item !== name;
        });
    setChannels(updatedChannels);
    console.log('setFilters', updatedChannels);
  };

  const clearFilters = () => {
    console.log('clearFilters');
  };

  return (
    <div className={reviewsContainer}>
      {!loading && !error && (
        <>
          <h1 className={title}>{totalCount} Reviews</h1>

          <Filter
            selectedChannels={channels}
            checkBoxOnChange={filterCheckboxOnChange}
            clearFilters={clearFilters}
            applyFilters={clearFilters}
          />

          {data.map((review, index) => (
            <Review review={review} key={index} />
          ))}
          <div className={paginationContainer}>
            <div>
              <span>Page Limit</span>
              <Dropdown onChange={onLimitChange} options={limitsPerPage} value={`${_limit}`} />
            </div>
            <Pagination
              activePage={_page}
              itemsCountPerPage={_limit}
              totalItemsCount={totalCount}
              pageRangeDisplayed={3}
              onChange={onPageClick}
              innerClass={paginationStyle}
            />
          </div>
        </>
      )}
    </div>
  );
};
