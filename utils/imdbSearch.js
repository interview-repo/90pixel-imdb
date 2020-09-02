import { useEffect, useState } from "react";
import { queryString, renameKeys } from "./func";


export default function imdbSearch() {
  const [search, setSearch] = useState({
    s: "", // title
    type: "movie", // movie, series, episode
    y: "", // year
    page: 1, // page
    plot: "full", // return short or full plot.
  });

  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(false);
  const qs = queryString(search);

  
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&${qs}`
        );
        const data = await response.json();
        const { Response, Search, totalResults, Error } = data;

        if (Response !== "False") {
          setResponse({
            data: Search,
            totalResults,
          });
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
    search.s.length > 0 && fetchData();
  }, [search]);

  const searchFunction = (args) => {
    const obj = renameKeys(
      {
        title: "s",
        year: "y",
      },
      args
    );

    setSearch({ ...search, ...obj });
  };

  return {
    searchFunction,
    response,
    error,
    isLoading,
  };
}
