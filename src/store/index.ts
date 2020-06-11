import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './rootReducer';

export default function configureStore() {
  return createStore(rootReducer, applyMiddleware(thunk, logger));
}
