import Head from 'next/head'
import { Provider } from "react-redux";
import store from "../store";
import IndexLayout from "../container";
import "../index.css";

const MyApp = ({ Component, pageProps  }) => {
  
  return (
    <Provider store={store}>
      <Head>
        <title>IMDb Clone - React & Tailwind & Redux</title>
      </Head>
      <div>
        <IndexLayout>
          <Component {...pageProps} />
        </IndexLayout>
      </div>
    </Provider>
  );
};

export default MyApp;