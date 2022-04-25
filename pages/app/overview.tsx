import axios from 'axios';
import { getSession } from 'next-auth/react';
import { useState, useRef } from 'react';
import { useMutation } from 'react-query';
import dynamic from 'next/dynamic';
import { toast } from 'react-toastify';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import Button from '../../components/ui/Button/Button';
import Title from '../../components/ui/Title';
import abbrNum from '../../lib/abbreviateText/abbreviateNumber';
import shortenText from '../../lib/shortenText/shortenText';

const Chart = dynamic(() => import('../../components/ui/Chart'), {
  ssr: false,
});

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

function Overview({ session }) {
  const user = session?.user;
  const toastId = useRef(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [companyFundamentals, setCompanyFundamentals] = useState<any>({});
  const [series, setSeries] = useState<any>([]);
  const [openDescription, setOpenDescription] = useState(true);

  const {
    isLoading, isIdle, isError, mutate,
  }: any = useMutation(
    'searchStock',
    () => axios.post('/api/overview', {
      search: searchTerm,
    }),
    {
      onSuccess: (data: any) => {
        const dailyData = [];
        const overviewData = {
          Description: null,
        };
        for (const key in data.data?.data_daily['Time Series (Daily)']) {
          dailyData.unshift({
            time: key,
            open: data?.data?.data_daily['Time Series (Daily)'][key]['1. open'],
            high: data?.data?.data_daily['Time Series (Daily)'][key]['2. high'],
            low: data?.data?.data_daily['Time Series (Daily)'][key]['3. low'],
            close:
              data?.data?.data_daily['Time Series (Daily)'][key]['4. close'],
          });
        }
        setSeries(dailyData);
        Object.entries(data.data.data).forEach(([key, value]) => {
          console.log(key, typeof value);
          if (!isNaN(+value)) {
            const abbr = abbrNum(+value, 1);
            overviewData[key] = abbr;
          } else {
            overviewData[key] = value;
          }
        });
        setCompanyFundamentals(overviewData);
      },
      onError: (error: any) => {
        toastId.current = toast.error(error.response.data.error);
        setSeries([]);
        setCompanyFundamentals({});
      },
    },
  );

  return (
    <DashboardLayout user={user} title="Overview">
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        className="bg-gray-200 border border-black border-1 rounded-md focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
        type="text"
        placeholder="AAPL"
      />
      <Button
        variant="primary"
        onClick={() => mutate(searchTerm)}
        type="submit"
        disabled={isLoading}
      >
        {!isLoading ? 'Search' : 'Loading...'}
      </Button>
      {!isIdle && !isError && !isLoading && (
        <>
          <Title type="h1">
            {companyFundamentals?.Name}
            {' '}
            {companyFundamentals?.Symbol}
            {' '}
            Overview:
          </Title>
          <Chart series={series} />
          <div className="col-span-2 my-5">
            <Title type="h4">Description:</Title>
            <p className="my-2">{companyFundamentals.Description}</p>
          </div>
          <div className="grid grid-cols-2">
            {Object.keys(companyFundamentals).map(
              (key) => key !== 'Description'
                && key !== 'Symbol'
                && key !== 'Name' && (
                  <div className="grid grid-cols-2 my-2" key={key}>
                    <Title type="h4">
                      {key}
                      :
                    </Title>
                    <p>{companyFundamentals[key]}</p>
                  </div>
              ),
            )}
          </div>
        </>
      )}
    </DashboardLayout>
  );
}

export default Overview;
