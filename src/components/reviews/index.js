import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from 'react-js-pagination';
import queryString from 'query-string';
import { useHistory, useLocation } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { paginationContainer, paginationStyle, reviewsContainer, title } from './reviews.style';
import { getReviews } from '../../redux/reviews';
import { limitsPerPage } from '../../utils/constants';
import { Review } from './review.component';
import Filter from '../filters';

export const ReviewList = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [toFetch, setToFetch] = useState(false);
  const [_page, setCurrentPage] = useState(1);
  const [_limit, setLimit] = useState(10);
  const [channels, setChannels] = useState([]);
  // eslint-disable-next-line camelcase
  const [score, setScore] = useState('');

  const reviews = useSelector((state) => state.reviews);
  const { data, error, loading, totalCount } = reviews;

  const dispatch = useDispatch();
  const { search: locationQuery } = useLocation();
  const { push: historyPush } = useHistory();

  const filterString = JSON.stringify({ _page, _limit, channel: channels, score_gte: score });

  const keyMap = {
    _page: setCurrentPage,
    _limit: setLimit,
    channel: setChannels,
    score_gte: setScore,
  };

  // repopulate filters on component  mount
  useEffect(() => {
    if (locationQuery) {
      const queryParams = queryString.parse(locationQuery);
      Object.entries(queryParams).forEach(([key, value]) => {
        let cleanedValue = value;
        if (key === '_page' || key === '_limit') {
          cleanedValue = parseInt(value, 10);
        }
        if (key === 'channel') {
          cleanedValue = Array.isArray(value) ? value : [value];
        }
        keyMap[key](cleanedValue);
      });
      setShowFilter(true);
    }
    setToFetch(true);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // update url and fetch filtered reviews
  useEffect(() => {
    if (toFetch) {
      let filterObject = JSON.parse(filterString);
      if (!filterObject.score_gte) {
        // eslint-disable-next-line camelcase
        const { score_gte, ...rest } = filterObject;
        filterObject = rest;
      }
      const queryFilters = queryString.stringify(filterObject);
      historyPush({ search: queryFilters });
      dispatch(getReviews(queryFilters));
    }
  }, [filterString, toFetch, dispatch, historyPush]);

  const onLimitChange = (item) => {
    setCurrentPage(1);
    setLimit(parseInt(item.value, 10));
  };

  const onPageClick = (page) => {
    setCurrentPage(page);
  };

  const onChannelChange = (event) => {
    const { name, checked } = event.target;
    const updatedChannels = checked
      ? [...channels, name]
      : channels.filter((item) => {
          return item !== name;
        });
    setCurrentPage(1);
    setChannels(updatedChannels);
  };

  const onScoreChange = (event) => {
    setCurrentPage(1);
    setScore(event.target.value);
  };

  const clearFilters = () => {
    setCurrentPage(1);
    setChannels([]);
    setScore('');
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className={reviewsContainer}>
      <h1 className={title}>{!loading && !error && totalCount} Reviews</h1>
      <Filter
        selectedChannels={channels}
        selectedScore={score}
        onChannelChange={onChannelChange}
        onScoreChange={onScoreChange}
        clearFilters={clearFilters}
        toggleFilter={toggleFilter}
        showFilter={showFilter}
      />

      {!loading && !error && (
        <>
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
