import "../styles/globals.css";

import Head from "next/head";

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

export default MyApp;
