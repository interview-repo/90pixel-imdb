import { useEffect, useState } from "react";


export default function imdbDetails({imdbID}) {

  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(false);
  
  
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&i=${imdbID}`
        );
        const data = await response.json();
        const { Response, Error } = data;
        
        if (Response !== "False") {
          setResponse(data);
          setError(false);

        } else {
          setResponse(null);
          setError(Error);
        }

        setIsLoading(false);


      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };

    if(typeof imdbID !== "undefined") fetchData();


  }, [imdbID]);

  

  return {
    response,
    error,
    isLoading,
  };
}
