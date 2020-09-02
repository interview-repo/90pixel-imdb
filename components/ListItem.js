import Link from "next/link";
import { Button } from "antd";

const ListItem = (props) => {
  const { Poster, Title, Type, Year, imdbID, status } = props;

  return (
    <>
      <div
        className={` ${
          props.onShow ? "bg-gray-200" : "bg-gray-100"
        }  px-8 py-6 flex items-center border-b border-gray-300`}
      >
        <div className="flex ml-0 w-3/4">
          {Poster !== "N/A" && (
            <img
              src={Poster}
              className="w-10 h-10 object-cover rounded object-top"
            />
          )}

          <div
            className={`flex flex-col ${Poster === "N/A" ? "pl-0" : "pl-4"}`}
          >
            <h2 className="font-medium text-sm">{Title}</h2>
            <h3 className="text-gray-500 text-sm">
              {Year} / {Type}{" "}
            </h3>
          </div>
        </div>

        {status ? (
          <Button
            onClick={() => props.removeFavori({ imdbID })}
            className="text-gray-500 flex items-center text-sm focus:outline-none mr-8 rounded py-2 leading-none"
          >
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
              <path
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Remove
          </Button>
        ) : (
          <Button
            onClick={() => props.addFavori({ Title, Type, Year, imdbID })}
            className="text-gray-500 flex items-center text-sm focus:outline-none mr-8 rounded py-2 leading-none"
          >
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
              <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            Add
          </Button>
        )}

        <Link href="/[imdbID]" as={`/${imdbID}`}>
          <a className="text-gray-500 flex items-center text-sm focus:outline-none rounded py-2 leading-none">
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
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            Show
          </a>
        </Link>
      </div>
    </>
  );
};

export default ListItem;
