import { SessionProvider } from 'next-auth/react';
import { AppProps } from "next/app";
import "../tailwind.css"
import NextNProgress from "nextjs-progressbar";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

const App = ({ Component, pageProps }: AppProps) => {
  return (
      <SessionProvider session={pageProps.session}>
        <NextNProgress />
        <ToastContainer position="bottom-right" />
        <Component {...pageProps} />
      </SessionProvider>
  );
};

export default App;