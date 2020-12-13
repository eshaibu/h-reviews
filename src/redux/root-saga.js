import { all } from 'redux-saga/effects';
import { reviewsSaga } from './reviews';

function* rootSaga() {
  yield all([reviewsSaga()]);
}

export default rootSaga;
