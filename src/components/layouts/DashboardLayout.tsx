import Head from 'next/head';
import DashboardHeader from '../headers/DashboardHeader';

interface Props {
    user: {
        name?: string
        image?: string
        email?: string
    }
    children: React.ReactNode;
    title: string;
}

function DashboardLayout(props: Props) {
  return (
    <>
      <Head>
        <title>
          {props.title}
          {' '}
          | Stock-app
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <DashboardHeader user={props.user} />
      <div className="container max-w-7xl mx-auto px-3 my-2">
        {props.children}
      </div>
    </>
  );
}

export default DashboardLayout;
