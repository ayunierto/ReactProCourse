import { Counter } from "./bases/Counter";
import { CounterBy } from "./bases/CounterBy";
import { CounterEffect } from "./bases/CounterEffect";
import { CounterHook } from "./bases/CounterHook";
// import { CounterReducerComponent } from "./bases/CounterReducer";
import { CounterReducerComponent } from "./counter-reducer/CounterReducer";

export const App = () => {
  return (
    <>
      <CounterReducerComponent />
      <Counter initialValue={0} />
      <CounterBy />
      <CounterEffect />
      <CounterHook />
    </>
  );
};
