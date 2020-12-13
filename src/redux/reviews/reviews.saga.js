import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { addReviews, GET_REVIEWS, setRequestError } from './reviews.action';

function* handleGetReviews(action) {
  try {
    const path = `https://interview-task-api.bookiply.io/reviews?${action.payload}`;
    const response = yield call(axios.get, path);
    const totalCount = parseInt(response.headers['x-total-count'], 10);

    yield put(addReviews({ data: response.data, totalCount }));
  } catch (error) {
    yield put(setRequestError(error.message || 'Oops! Something went wrong.'));
  }
}

function* reviewsSaga() {
  yield takeLatest(GET_REVIEWS, handleGetReviews);
}

export default reviewsSaga;
