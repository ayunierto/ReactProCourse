import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const MAXIMUN_COUNT = 10;

export const CounterEffect = ({ initialValue = 0 }) => {
  const [counter, setCounter] = useState(initialValue);
  const elementToAnimate = useRef<any>();

  const handleClick = () => {
    setCounter((prev) => Math.min(MAXIMUN_COUNT, prev + 1));
  };

  useEffect(() => {
    if (counter < 10) return;

    console.log("%cMax value", "color: red; background-color: black;");

    const timeline = gsap.timeline();

    timeline.to(elementToAnimate.current, {
      y: -10,
      duration: 0.3,
      ease: "ease.out",
    });
    timeline.to(elementToAnimate.current, {
      y: 0,
      duration: 1,
      ease: "bounce.out",
    });
  }, [counter]);

  return (
    <>
      <h1>CounterEffect: </h1>
      <h2 ref={elementToAnimate}>{counter}</h2>

      <button onClick={handleClick}>+1</button>
    </>
  );
};
