import { Button } from "antd";

const FavoriteList = ({ ...props }) => {
  const { favoriler, removeFavori, clearAll } = props;
  
  return (
    <div className="lg:w-1/2 bg-teal-600 text-white flex flex-col">
      <div className="p-8 bg-teal-700 flex items-center">
        <div className="mr-auto">
          <h1 className="text-xl leading-none mb-1">Favorites List</h1>
        </div>
        <Button
          onClick={() => clearAll()}
          className="bg-teal-600 text-white py-2 text-sm px-3 rounded focus:outline-none"
        >
          Clear All
        </Button>
      </div>

      <div className="p-8 flex flex-1 items-start overflow-auto">
        <div className="flex-1 pl-0">
          {Object.values(favoriler).map((item) => (
            <div className="flex mb-8" key={item.imdbID}>
              <div className="w-4 h-4 flex-shrink-0 rounded-full border-teal-400 border-2 mt-1 mr-2" />
              <div className="flex-grow">
                <h3 className="text-sm mb-1">{item.Title}</h3>
                <h4 className="text-xs text-teal-300 italic">
                  {item.Type} / {item.Year}
                </h4>
              </div>

              <Button 
                onClick={() => removeFavori({ imdbID: item.imdbID })}
                className="text-teal-300 flex-shrink-0 ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 mr-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoriteList;
