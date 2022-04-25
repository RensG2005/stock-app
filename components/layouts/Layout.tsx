import React, { ReactNode } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Header from '../headers/Header';
import Footer from '../footers/Footer';

type Props = {
  children: ReactNode;
  title: string;
  noFooter?: boolean;
  darkSide?: boolean;
  setDarkSide?: (darkSide: boolean) => void;
};

const Layout: React.FC<Props> = (props) => (
  <>
    <Head>
      <title>
        {props.title}
        {' '}
        | Stock-app
      </title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Stock-app for analyzing stocks" />
    </Head>
    <Header setDarkSide={props.setDarkSide} darkSide={props.darkSide} />

    <div className="absolute top-0 left-0 bottom-0 right-0 bg-slate-50 dark:bg-slate-800 z-0" />

    <motion.div
      initial={false}
      animate={{
        opacity: 1,
        transition: {
          duration: 6,
          ease: 'easeInOut',
        },
      }}
    >
      {/* <motion.div initial={false} animate={{ y: [0, 100, 0] }} transition={{ duration: 15, repeat: Infinity }} layout="position"> */}
      <div className="absolute left-[43%]  bg-red-100 dark:bg-red-700 blur-lg z-1 rounded-full shadow-3xl dark:shadow-dark-4xl shadow-red-100 dark:shadow-red-700 w-1/4 h-[15%]" />
      <div className="absolute left-[43%] -translate-x-full bg-sky-100 dark:bg-sky-700 blur-lg z-1 rounded-md shadow-3xl dark:shadow-dark-4xl shadow-sky-100 dark:shadow-sky-800 w-1/4" />
      {/* </motion.div> */}

      {/* <motion.div initial={false} animate={{ y: [400, 500, 4000] }} transition={{ duration: 15, repeat: Infinity }} layout="position"> */}

      <div className="absolute top-[10%] left-[50%]  bg-red-100 z-1 rounded-full shadow-3xl shadow-red-100 w-1/4 h-[18%] dark:shadow-red-700 dark:bg-red-800" />
      <div className="absolute top-[10%] left-[45%] -translate-x-full bg-sky-100 z-1 rounded-full shadow-4xl shadow-sky-100 dark:shadow-sky-600 dark:bg-sky-700 w-1/4 h-[20%]" />

      {/* </motion.div> */}

      <div className="absolute top-[30%] left-[56%] -translate-x-full bg-red-100 dark:bg-red-700 blur-lg z-1 rounded-xl shadow-4xl shadow-red-100 dark:shadow-red-700 w-2/4 h-[22%]" />
      <div className="absolute top-[30%] left-[86%] -translate-x-full bg-sky-100 dark:bg-sky-500 blur-lg z-1 rounded-xl shadow-3xl shadow-sky-100 dark:shadow-sky-700 w-1/4 h-[27%]" />

      <div className="absolute top-[55%] left-[45%]  bg-red-100 dark:bg-red-700 blur-lg z-1 rounded-full shadow-4xl shadow-red-100 dark:shadow-red-700 w-1/4 h-[23%]" />
      <div className="absolute top-[60%] left-[50%] -translate-x-full bg-sky-100 dark:bg-sky-700 blur-lg z-1 rounded-full shadow-3xl shadow-sky-100 dark:shadow-sky-700 w-1/4 h-[20%]" />
    </motion.div>

    {props.children}
    {!props.noFooter && <Footer />}
  </>
);

export default Layout;
