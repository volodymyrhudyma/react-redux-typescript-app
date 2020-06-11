import { createSelector } from 'reselect';

import { AppState } from '../rootReducer';

export const getCounter = (state: AppState) =>
  state.counter.counter;

export const getCounterSelector = createSelector(
  getCounter,
  counter => counter,
);
