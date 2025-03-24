import { useState } from "react";

const useDebounce = (value: string, delay: number = 1000): boolean => {
  const [prevValue, setPrevValue] = useState<string>(value);
  setTimeout(() => {
    if (prevValue !== value) setPrevValue(value);
  }, delay);

  return prevValue === value;
};

export default useDebounce;
