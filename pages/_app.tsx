import "~/styles/globals.scss";
import type { AppProps } from "next/app";
import store from "~/redux/Store";
import { Provider } from "react-redux";
import PageInit from "~/components/pageInit/PageInit";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <PageInit>
          <Component {...pageProps} />;
        </PageInit>
      </Provider>

      <div
        style={{
          zIndex: 99999999999999999999999,
        }}>
        <ToastContainer />
      </div>
    </>
  );
}

export default MyApp;
