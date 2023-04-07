import Footer from "@/layout/Footer";
import "styles/layout.css";
import "Components/navbar.css";
import Navbar from "Components/Navbar";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session} >
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </SessionProvider>
  );
}

export default MyApp;
