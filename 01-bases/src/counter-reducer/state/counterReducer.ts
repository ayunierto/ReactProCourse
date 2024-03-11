import { CounterActions } from "../actions/actions";
import { CounterState } from "../interfaces/interfaces";

export const counterReducer = (
  { changes, counter, previous }: CounterState,
  action: CounterActions
): CounterState => {
  switch (action.type) {
    case "reset":
      return {
        counter: 0,
        previous: 0,
        changes: 0,
      };
    case "increaseBy":
      return {
        counter: counter + action.payload.value,
        previous: counter,
        changes: changes + 1,
      };

    default:
      return {
        counter,
        previous,
        changes,
      };
  }
};
