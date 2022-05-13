import "~/styles/globals.scss";
import type { AppProps } from "next/app";
import store from "~/redux/Store";
import { Provider } from "react-redux";
import PageInit from "~/components/pageInit/PageInit";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PageInit>
        <Component {...pageProps} />;
      </PageInit>
    </Provider>
  );
}

export default MyApp;
