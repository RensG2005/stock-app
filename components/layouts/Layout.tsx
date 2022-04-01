import React, { ReactNode } from "react";
import Header from "../headers/Header";
import Head from 'next/head'

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
    <div className="container max-w-7/12 mx-auto px-3 my-2 scroll-y-auto">
      {props.children}
    </div>
  </>
);

export default Layout;
