import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type Response<initialData> = [
  initialData,
  Dispatch<SetStateAction<initialData>>,
];

function usePersistedState<initialData>(key: string, initialState: initialData): Response<initialData> {

  const [value, setValue] = useState(initialState);

  useEffect(() => {
    const searchValue = window.localStorage.getItem(key);
    if (searchValue !== null) {
      setValue(JSON.parse(searchValue));
    }
  }, [key]);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
export default usePersistedState;