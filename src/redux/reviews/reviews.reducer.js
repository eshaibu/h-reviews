import { ADD_REVIEWS, GET_REVIEWS, RESET_REVIEWS, REQUEST_ERROR } from './reviews.action';

const initialValue = {
  loading: false,
  data: [],
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
        data: action.payload,
        loading: false,
      };
    case REQUEST_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case RESET_REVIEWS:
      return { ...state, ...initialValue };
    default:
      return state;
  }
};
