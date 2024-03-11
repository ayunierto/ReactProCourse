import { useReducer } from "react";
import { CounterState } from "./interfaces/interfaces";
import { counterReducer } from "./state/counterReducer";
import * as actions from "./actions/actions";

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

export const CounterReducerComponent = () => {
  const [{ counter, previous, changes }, dispatch] = useReducer(
    counterReducer,
    INITIAL_STATE
  );

  const increaseBy = (value: number) => {
    dispatch(actions.doIncreaseBy(value));
  };
  const handleReset = () => {
    dispatch(actions.doReset());
  };

  return (
    <>
      <h1>CounterReducerSegmented: {counter}</h1>
      <h2>Previous: {previous}</h2>
      <h2>Changes: {changes}</h2>

      <button onClick={() => increaseBy(1)}>+1</button>
      <button onClick={() => increaseBy(5)}>+5</button>
      <button onClick={() => increaseBy(10)}>+10</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};
