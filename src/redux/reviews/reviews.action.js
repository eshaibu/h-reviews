export const GET_REVIEWS = 'GET_REVIEWS';
export const ADD_REVIEWS = 'ADD_REVIEWS';
export const RESET_REVIEWS = 'RESET_REVIEWS';
export const REQUEST_ERROR = 'REQUEST_ERROR';

export const getReviews = () => ({ type: GET_REVIEWS });
export const addReviews = (payload) => ({
  type: ADD_REVIEWS,
  payload,
});
export const setRequestError = (payload) => ({
  type: REQUEST_ERROR,
  payload,
});
export const resetReviews = () => ({
  type: RESET_REVIEWS,
});
