import { useState } from 'react';
import { useDebounce } from './useDebounce';


function useSearchCharacter() {
  const [query, setQuery] = useState("");
  const debounceQuery = useDebounce(query, 1000);

  const handleChangeQuery = (value: string) => setQuery(value);

  return { debounceQuery, handleChangeQuery, query };
}

export default useSearchCharacter;
