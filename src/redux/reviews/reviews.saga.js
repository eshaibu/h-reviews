import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { addReviews, GET_REVIEWS, setRequestError } from './reviews.action';

function* handleGetReviews() {
  try {
    const path = `https://interview-task-api.bookiply.io/reviews`;

    const response = yield call(axios.get, path);
    console.log('response headers>>>>>', response.headers);

    yield put(addReviews(response.data));
  } catch (error) {
    console.log(error, '>>>>>>>>error');
    yield put(setRequestError(error.message || 'Oops! Something went wrong.'));
  }
}

function* reviewsSaga() {
  yield takeLatest(GET_REVIEWS, handleGetReviews);
}

export default reviewsSaga;
