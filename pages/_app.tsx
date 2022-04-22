import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import '../tailwind.css';
import NextNProgress from 'nextjs-progressbar';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Head from 'next/head';
import { QueryClientProvider, QueryClient } from 'react-query';
import { useRef } from 'react';
import axios from 'axios';

export function reportWebVitals(metric) {
  console.log(metric);
}

function App({ Component, pageProps }: AppProps) {
  const toastId = useRef(null);
  const defaultQueryFn = async ({ queryKey }) => {
    const [query, params] = queryKey;
    toastId.current = toast.loading('Loading...');
    const response = await axios.get(
      `http://localhost:3000/api${query}?${new URLSearchParams(params)}`,
    );
    if (!response.data) {
      toast.dismiss(toastId.current);
      toast.error('Network response was not ok');
      throw new Error('Network response was not ok');
    } else {
      toast.dismiss(toastId.current);
      return response.data;
    }
  };
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        queryFn: defaultQueryFn,
      },
    },
  });
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <SessionProvider session={pageProps.session}>
        <QueryClientProvider client={queryClient}>
          <NextNProgress />
          <ToastContainer position="bottom-right" />
          <Component {...pageProps} />
        </QueryClientProvider>
      </SessionProvider>
    </>
  );
}

export default App;
