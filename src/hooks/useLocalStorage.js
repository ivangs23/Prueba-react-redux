import { useEffect, useState } from 'react';

export default function useLocalStorageStage(localStorageKey, defaultValue) {
  const initialValue = JSON.parse(localStorage.getItem(localStorageKey)) || defaultValue;
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify((value)));
  }, [value]);
  return [value, setValue];
}
