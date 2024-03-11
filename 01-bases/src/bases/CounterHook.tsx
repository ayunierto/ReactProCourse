import { useCounter } from "../hooks/useCounter";

const MAXIMUN_COUNT = 10;

export const CounterHook = ({ initialValue = 0 }) => {
  const { counter, elementToAnimate, handleClick } = useCounter({
    maxCount: MAXIMUN_COUNT,
    initialValue: 0,
  });

  return (
    <>
      <h1>CounterHook: </h1>
      <h2 ref={elementToAnimate}>{counter}</h2>

      <button onClick={handleClick}>+1</button>
    </>
  );
};
