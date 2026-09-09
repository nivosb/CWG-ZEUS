import { useEffect, useRef, useState } from 'react';

export const useScrollReveal = <T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = { threshold: 0.15 }
) => {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);
    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return { ref, visible };
};

export const revealClasses = (visible: boolean) =>
  `transition-all duration-700 ease-out will-change-transform ${
    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  }`;

export const revealDelay = (delay: number) => ({ transitionDelay: `${delay}ms` });
