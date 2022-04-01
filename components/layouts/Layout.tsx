import React, { ReactNode } from "react";
import Header from "../headers/Header";
import Head from 'next/head'
import Footer from "../footers/Footer";

type Props = {
  children: ReactNode;
  title: string;
};

const Layout: React.FC<Props> = (props) => (
  <>
    <Head>
      <title>{props.title} | Stock-app</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
      {props.children}
    <Footer />
  </>
);

export default Layout;
