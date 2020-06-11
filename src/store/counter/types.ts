import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './actionTypes';

export type CounterState = {
  counter: number;
};

export type IncrementCounter = {
  type: typeof INCREMENT_COUNTER;
};

export type DecrementCounter = {
  type: typeof DECREMENT_COUNTER;
};

export type CounterActions = IncrementCounter | DecrementCounter;
