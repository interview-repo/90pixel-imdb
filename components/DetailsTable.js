const DetailsTable = (props) => {
  const { data } = props;
  const columns = [ "Year", "Released", "Runtime", "Genre", "Director", "Writer", "Actors", "Plot", "Language", "Country", "Awards", "Metascore", "imdbRating", "imdbVotes", "Type", "DVD", "Production"];

  return (
    <>
        <div className="container">
          <div className="py-1">
            
            {data?.Poster !== 'N/A' && (
              <img className="w-3/4 shadow-xl mx-auto" src={data?.Poster} />
            )}

            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block w-100 shadow rounded-sm overflow-hidden">
                <table className="w-full leading-normal">
                  
                  <tbody>
                    {columns.map( (col, index) => (
                    <tr key={index}>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 ">{col}</p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 ">
                          {data?.[col]}
                        </p>
                      </td>
                      
                    </tr>
                    ))}
                  </tbody>
                </table>

              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default DetailsTable;
