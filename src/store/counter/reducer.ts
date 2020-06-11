import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './actionTypes';

import { CounterActions, CounterState } from './types';

const initialState: CounterState = {
  counter: 0,
};

export default (state = initialState, action: CounterActions) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return {
        ...state,
      };
  }
};
