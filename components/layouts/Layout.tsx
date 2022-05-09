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

    {/* <motion.div
      initial={false}
      animate={{
        opacity: 1,
        transition: {
          duration: 6,
          ease: 'easeInOut',
        },
      }}
    > */}
    {!props.darkSide && (
      <>
        <div className="absolute left-[43%] blur-3xl z-1 rounded-full shadow-3xl shadow-red-200 w-1/4 bg-red-200 h-[12%]" />
        <div className="absolute left-[43%] -translate-x-full blur-3xl z-1 rounded-full shadow-3xl shadow-sky-200 w-1/4 bg-sky-200 h-[12%]" />

        <div className="absolute top-[12%] left-[43%] -translate-x-full bg-sky-200 blur-3xl z-1 rounded-md shadow-3xl shadow-sky-200 w-1/4 h-[12%]" />
        <div className="absolute top-[10%] left-[43%]  bg-red-200 blur-3xl z-1 rounded-full shadow-3xl shadow-red-200 w-1/4 h-[12%]" />

        <div className="absolute top-[30%] left-[56%] -translate-x-full bg-red-200 blur-3xl z-1 rounded-full shadow-4xl shadow-red-200 w-1/4 h-[12%] h-16" />
        <div className="absolute top-[30%] left-[86%] -translate-x-full bg-sky-200 blur-3xl z-1 rounded-xl shadow-3xl shadow-sky-200 w-1/4 h-[12%]" />

        <div className="absolute top-[55%] left-[45%]   blur-3xl z-1 rounded-full shadow-4xl shadow-red-200 w-1/4 h-16 bg-red-200 h-[12%]" />
        <div className="absolute top-[60%] left-[50%] -translate-x-full blur-3xl z-1 rounded-full shadow-3xl shadow-sky-200 w-1/4 h-16 h-[12%] bg-sky-100" />
      </>
    )}

    {props.darkSide && (
      <>
        <div className="absolute left-[53%] bg-red-700 blur-3xl w-1/6 h-1/6 rounded-2xl shadow-4xl shadow-red-900" />
        <div className="absolute left-[23%] bg-sky-700 blur-3xl w-1/6 h-1/6 rounded-2xl shadow-4xl shadow-sky-900" />

        <div className="absolute left-[53%] top-[30%] bg-red-700 blur-3xl w-1/6 h-1/6 rounded-2xl shadow-4xl shadow-red-900" />
        <div className="absolute left-[23%] top-[30%] bg-sky-700 blur-3xl w-1/6 h-1/6 rounded-2xl shadow-4xl shadow-sky-900" />

        <div className="absolute left-[53%] top-[60%] bg-red-700 blur-3xl w-1/6 h-1/6 rounded-2xl shadow-4xl shadow-red-900" />
        <div className="absolute left-[23%] top-[60%] bg-sky-700 blur-3xl w-1/6 h-1/6 rounded-2xl shadow-4xl shadow-sky-900" />
      </>
    )}
    {props.children}
    {!props.noFooter && <Footer />}
  </>
);

export default Layout;
