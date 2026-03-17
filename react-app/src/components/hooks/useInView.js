import { useEffect, useRef, useState } from 'react';

export function useInView(options = {}) {
  const { threshold = 0.1, rootMargin = '0px' } = options;
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // IntersectionObserver is a browser API that watches when elements enter the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the element comes into view, set isInView to true
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold, rootMargin }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup: stop observing when component unmounts
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  return { ref, isInView };
}