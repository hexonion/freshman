import { useMemo } from 'react';

export default function useCityLights(count = 100) {
  return useMemo(() => {
    return Array.from({ length: count }, () => ({
      left: Math.random() * 100 + '%',
      top: Math.random() * 100 + '%',
      delay: Math.random() * 5 + 's',
      duration: 1.5 + Math.random() * 4 + 's',
      size: 1 + Math.random() * 3 + 'px',
    }));
  }, [count]);
}