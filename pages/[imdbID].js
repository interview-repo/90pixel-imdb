import Link from "next/link";
import { useRouter } from "next/router";
import imdbDetails from "../utils/imdbDetails";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import DetailsTable from "../components/DetailsTable";

const DetailsPage = () => {
  const router = useRouter();
  const { imdbID } = router.query;
  const { response, error, isLoading } = imdbDetails({ imdbID });

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <>
      <div className="p-8 bg-teal-700 flex items-center">
        <div className="mr-auto">
          <h1 className="text-xl leading-none mb-1"> {response.Title} </h1>
        </div>
        <Link href="/">
          <a className="bg-teal-600 text-white py-2 text-sm px-3 rounded focus:outline-none">
            Close
          </a>
        </Link>
      </div>

      <div className="p-8 flex flex-1 items-start overflow-auto">
        <div className="flex-1 pl-0">
          <DetailsTable data={response} />
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
