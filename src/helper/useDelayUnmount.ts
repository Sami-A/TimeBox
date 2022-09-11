import { useState, useEffect } from "react";
const useDelayUnmount = (isOpen: boolean, delayTime: number = 0): boolean => {
  const [showComponent, setShowComponent] = useState<boolean>(false);
  useEffect(() => {
    let timeout = setTimeout(() => setShowComponent(isOpen), delayTime);

    return () => clearTimeout(timeout);
  }, [delayTime, showComponent, isOpen]);

  return showComponent;
};

export default useDelayUnmount;
