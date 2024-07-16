import { useEffect, useState } from "react";


export const useDisplay = (displayNumber) => {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    setDisplay(displayNumber);
  }, [displayNumber]);

  return { display };
};
