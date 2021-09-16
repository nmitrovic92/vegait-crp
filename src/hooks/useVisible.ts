import { useState, useEffect } from 'react';

// Hook
export const useVisible = (ref: any, rootMargin = "0px") => {
  // State and setter for storing whether element is visible
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      // set watcher on element
      observer.observe(ref.current);
    }

    return () => {
      observer.unobserve(ref.current);
    };
  }, [ref, rootMargin]); // Empty array ensures that effect is only run on mount and unmount

  return isVisible;
}