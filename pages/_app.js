import "../styles/globals.css";
import { Header1, Header2 } from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header1 />
      {/* <Header2 /> */}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
