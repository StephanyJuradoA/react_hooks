import { useEffect,useState } from "react";


export function useGetCharacters ()
{
    const [dataP, setDataP] = useState<any[]>([]);
    const [loading,setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://rickandmortyapi.com/api/character`, {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((data) => {
        setDataP(data.results);
      }).finally(()=> setLoading(false));
  }, []);

  return {characters:dataP, loading};
}
