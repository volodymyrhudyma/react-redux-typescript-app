import { Dispatch } from 'redux';

import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './actionTypes';

import { IncrementCounter, DecrementCounter } from './types';

export const incrementCounter = () => {
  return async (dispatch: Dispatch) => {
    dispatch<IncrementCounter>({
      type: INCREMENT_COUNTER,
    });
  };
};

export const decrementCounter = () => {
  return async (dispatch: Dispatch) => {
    dispatch<DecrementCounter>({
      type: DECREMENT_COUNTER,
    });
  };
};
