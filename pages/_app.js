import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  //let check = axios.get(...pageProps.url);

  return <Component {...pageProps} />;
}

export default MyApp;
