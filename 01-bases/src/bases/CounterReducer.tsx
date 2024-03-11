import { useReducer } from "react";

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

type CounterActions =
  | {
      type: "increaseBy";
      payload: {
        value: number;
      };
    }
  | {
      type: "reset";
    };

const counterReducer = (
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

export const CounterReducerComponent = () => {
  const [{ counter, previous, changes }, dispatch] = useReducer(
    counterReducer,
    INITIAL_STATE
  );

  const increaseBy = (value: number) => {
    dispatch({ type: "increaseBy", payload: { value } });
  };
  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  return (
    <>
      <h1>CounterReducer: {counter}</h1>
      <h2>Previous: {previous}</h2>
      <h2>Changes: {changes}</h2>

      <button onClick={() => increaseBy(1)}>+1</button>
      <button onClick={() => increaseBy(5)}>+5</button>
      <button onClick={() => increaseBy(10)}>+10</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};
