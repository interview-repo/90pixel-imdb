import dynamic from 'next/dynamic'
import { useState, useLayoutEffect } from "react";
import Home from "./Home";
import imdbSearch from "../utils/imdbSearch";
import { useSelector, useDispatch } from "react-redux";
import { getFavorite, reset, remove } from "../redux/favoriSlice";
import Background from "../components/Background";
import ImdbLogo from "../components/imdb-logo";
import SearchForm from "../components/SearchForm";
const FavoriteList = dynamic(() => import('./FavoriteList'))

const IndexLayout = ({ children }) => {
  const dispatch    = useDispatch();
  const { searchFunction, response, error, isLoading } = imdbSearch();
  const [className, setClassName] = useState('home-small')
  

  const favoriler   = useSelector(getFavorite);
  const clearAll = () => dispatch(reset());
  const removeFavori = (props) => dispatch(remove(props))
  

  useLayoutEffect(() => {
    response && setClassName('home-medium');
    children.type.name === "DetailsPage" && setClassName('home-big');
    favoriler.length > 0 && setClassName('home-big');
  }, [response, children, favoriler]);


  return (
    <>
      <Background />
      <div className="container mx-auto h-screen py-16 px-8 relative">
        <div className={`flex home-container lg:flex-row ${className}`}>
          <div className="home-box" >

            <div className="p-8 shadow-md relative bg-white">
              <div className="flex items-center">
                <div className="text-teal-600 font-medium ml-1">
                  <ImdbLogo width="100" height="50" />
                </div>
              </div>
              <SearchForm searchFunction={searchFunction} />

            </div>
            <div className="overflow-auto flex-grow">
              <Home
                searchFunction={searchFunction}
                response={response}
                error={error}
                isLoading={isLoading}
              />
            </div>
          </div>

          {favoriler.length > 0 && children.type.name !== "DetailsPage" && (
            <FavoriteList 
              clearAll={clearAll} 
              removeFavori={removeFavori}
              favoriler={favoriler} />
          )}

          {children.type.name === "DetailsPage" && (
            <div className="lg:w-1/2 bg-teal-600 text-white flex flex-col">
              {children}
            </div>
          )}

        </div>
      </div>
    </>
  );
};

export default IndexLayout;
