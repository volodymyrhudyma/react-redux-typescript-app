import { combineReducers } from 'redux';

import counter from './counter/reducer';

const rootReducer = combineReducers({
  counter,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
