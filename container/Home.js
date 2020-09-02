import List from "./List";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

const HomePage = ({ response, error, isLoading }) => {
  if (isLoading) return <Loading />
  if (error) return  <ErrorMessage message={error} />

  return <List {...response} />;
};

export default HomePage;