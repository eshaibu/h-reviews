import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root-reducer';
import rootSaga from './root-saga';

export const configureStore = (defaultStore = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const composedEnhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));

  const store = createStore(rootReducer, defaultStore, composedEnhancer);

  sagaMiddleware.run(rootSaga);
  return store;
};

export const store = configureStore();
