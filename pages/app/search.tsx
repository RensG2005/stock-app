import axios from 'axios';
import { getSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { motion } from 'framer-motion';
import Link from 'next/link';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import Input from '../../components/ui/Input';
import Title from '../../components/ui/Title';
import useDebounce from '../../hooks/useDebounce';
import Spinner from '../../components/ui/Spinner';

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

export default function Search({ session }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  const {
    isLoading, isIdle, isError, mutate,
  }: any = useMutation(
    'searchStock',
    () => axios.post('/api/search', {
      search: searchTerm,
    }),
    {
      onSuccess(data, variables, context) {
        setSearchResults(data.data.data.bestMatches);
      },
      onError(error, variables, context) {
        console.log(error);
      },
    },
  );

  useEffect(() => {
    let mounted = true;
    if (mounted && searchTerm.length >= 2) {
      mutate(searchTerm);
    }
    return () => {
      mounted = false;
    };
  }, [debouncedSearchTerm]);

  return (
    <DashboardLayout title="Search for a stock" user={session?.user}>
      <Input
        type="text"
        onChange={(e) => setSearchTerm(e.target.value.substring(0, 6).toUpperCase())}
        placeholder="AAPL"
        value={searchTerm}
        className="mb-5"
      />

      {isLoading && <Spinner size={12} />}
      {isError && (
        <p className="text-red-500">
          Something went wrong while loading the stocks
        </p>
      )}

      {!isLoading && !isIdle && !isError && searchResults.length > 0 && (
        <div className="flex flex-col">
          {searchResults.map((item, index) => (
            <motion.div key={item.symbol}>
              <Link href={`/app/stock/${item['1. symbol']}`} replace passHref>
                <a>
                  <Title type="h1">{item['2. name']}</Title>
                  <Title type="h3">{item['1. symbol']}</Title>
                </a>
              </Link>
            </motion.div>
          ))}
        </div>
      )}

      {!isLoading && !isIdle && !isError && searchResults.length === 0 && (
        <div className="flex flex-col">
          <Title type="h1">No results found</Title>
        </div>
      )}
    </DashboardLayout>
  );
}
