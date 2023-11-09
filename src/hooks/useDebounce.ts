import { LoadingGlobal } from 'components';
import { useState, useEffect } from 'react';

export const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    LoadingGlobal(true);
    const handler = setTimeout(() => {
      setDebouncedValue(value);
      LoadingGlobal(false);
    }, delay);

    return () => clearTimeout(handler);
  }, [value]);

  return { debouncedValue };
};
