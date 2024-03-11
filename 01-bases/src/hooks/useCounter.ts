import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

interface Props {
  initialValue: number;
  maxCount: number;
}

export const useCounter = ({ initialValue, maxCount }: Props) => {
  const [counter, setCounter] = useState(initialValue);
  const elementToAnimate = useRef<any>(null);

  const handleClick = () => {
    setCounter((prev) => Math.min(maxCount, prev + 1));
  };

  const timeline = useRef(gsap.timeline());

  useLayoutEffect(() => {
    if (!elementToAnimate.current) return;

    // console.log("%cMax value", "color: red; background-color: black;");

    timeline.current
      .to(elementToAnimate.current, {
        y: -10,
        duration: 0.3,
        ease: "ease.out",
      })
      .to(elementToAnimate.current, {
        y: 0,
        duration: 1,
        ease: "bounce.out",
      })
      .pause();
  }, []);

  useEffect(() => {
    timeline.current.play(0);
  }, [counter]);

  return {
    handleClick,
    elementToAnimate,
    counter,
  };
};
