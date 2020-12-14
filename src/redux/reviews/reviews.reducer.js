import { ADD_REVIEWS, GET_REVIEWS, REQUEST_ERROR } from './reviews.action';

const initialValue = {
  loading: false,
  data: [],
  totalCount: 0,
  error: '',
};

export const reviewsReducer = (state = initialValue, action) => {
  switch (action.type) {
    case GET_REVIEWS:
      return {
        ...state,
        error: '',
        loading: true,
      };
    case ADD_REVIEWS:
      return {
        ...state,
        data: action.payload.data,
        totalCount: action.payload.totalCount,
        loading: false,
      };
    case REQUEST_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
