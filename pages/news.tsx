import { getSession } from 'next-auth/react';
import NewsCard from '../components/ui/NewsCard';
import DashboardLayout from '../components/layouts/DashboardLayout';
import Title from '../components/ui/Title';
import useFetch from '../hooks/useFetch';

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
}
interface Data {
  articles: Article[];
}

export default function News({ session }) {
  const user = session?.user;

  const { data } = useFetch<Data>('http://localhost:3000/api/news');

  return (
    <DashboardLayout title="News Today" user={user}>
      <Title type="h1">Today:</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {data
          && data.articles.map((news: Article) => (
            <NewsCard news={news} key={news.title} />
          ))}
      </div>
    </DashboardLayout>
  );
}
