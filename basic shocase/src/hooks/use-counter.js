import { useEffect, useState } from "react";

// konvencija za nazivanje custom hooks use+Naziv
const useCounter = (farwards = true) => {
  // state iz custom hook-a se vezuje za komponentu gde je hook pozvan
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (farwards) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [farwards]);

  return counter;
};

export default useCounter;
