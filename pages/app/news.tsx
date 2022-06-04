import { getSession } from 'next-auth/react';
import { useQuery } from 'react-query';
import { useState } from 'react';
import { motion } from 'framer-motion';
import NewsCard from '../../components/ui/NewsCard';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import Title from '../../components/ui/Title';
import Button from '../../components/ui/Button';

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (session === null) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}
interface Article {
  title: string;
  url: string;
  urlToImage: string;
  description: string;
  publishedAt: string;
  source: any;
}

export default function News({ session }) {
  const [display, setDisplay] = useState<'cards' | 'list'>('cards');
  const {
    isLoading, isError, data, error,
  }: any = useQuery('/news');

  return (
    <DashboardLayout title="News Today" user={session?.user}>
      {isLoading ? null : (
        <>
          <Title type="h1">Today:</Title>
          <Button
            variant={display === 'cards' ? 'primary' : 'transparent'}
            onClick={() => setDisplay('cards')}
            extraclass="m-4"
          >
            Display news as Cards
          </Button>
          <Button
            variant={display === 'list' ? 'primary' : 'transparent'}
            onClick={() => setDisplay('list')}
          >
            Display news as List
          </Button>
          <div
            className={
              display === 'cards'
                ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4'
                : 'flex flex-col'
            }
          >
            {isError && (
              <span className="text-red-50">
                Error:
                {error.message}
              </span>
            )}
            {data
              && data.articles.map((news: Article) => (
                <motion.div layout>
                  <NewsCard kind={display} news={news} key={news.title} />
                </motion.div>
              ))}
          </div>
        </>
      )}
    </DashboardLayout>
  );
}
