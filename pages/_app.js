import "../styles/globals.css";

import Head from "next/head";
import wrapper from "../store/configureStore";
import PropTypes from 'prop-types'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <title>Next</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

MyApp.propTypes = {
  Component : PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(MyApp) ;
