import axios from 'axios';
import { Session } from 'next-auth';
import { getSession } from 'next-auth/react';
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import DashboardLayout from '../../../components/layouts/DashboardLayout';
import Title from '../../../components/ui/Title';
import abbrNum from '../../../lib/abbreviateText/abbreviateNumber';
import Spinner from '../../../components/ui/Spinner';
import Tooltip from '../../../components/ui/Tooltip';

const Chart = dynamic(() => import('../../../components/ui/Chart'), {
  ssr: false,
  loading: () => <Spinner size={12} />,
});

export async function getServerSideProps(context) {
  const { ticker } = context.query;
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    };
  }
  return { props: { session, ticker } };
}

interface Props {
  session: Session;
  ticker: string;
}

function Stock({ session, ticker }: Props) {
  const user = session?.user;

  const toastId = useRef(null);

  const [companyFundamentals, setCompanyFundamentals] = useState<any>({});
  const [series, setSeries] = useState<any>([]);

  const {
    isLoading, isIdle, isError, mutate,
  }: any = useMutation(
    'searchStock',
    () => axios.post('/api/overview', {
      search: ticker,
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

  useEffect(() => {
    mutate();
  }, []);

  return (
    <DashboardLayout title={`${ticker}`} user={user}>
      {isLoading && <Spinner size={16} />}
      {!isIdle && !isError && !isLoading && (
        <motion.div animate={{ y: [100, 0] }}>
          <Title type="h1">
            {companyFundamentals?.Name}
            {' '}
            <span className="text-gray-100 text-lg">
              (
              {companyFundamentals?.Symbol}
              )
            </span>
            {' '}
            Overview:
          </Title>
          <Chart series={series} />
          <div className="col-span-2 my-5">
            <Title type="h4">Description:</Title>
            <p className="my-2">{companyFundamentals.Description}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {Object.keys(companyFundamentals).map(
              (key) => key !== 'Description'
                && key !== 'Symbol'
                && key !== 'Name' && (
                  <div className="grid grid-cols-2 my-2" key={key}>
                    <Title type="h4" extraclass="cursor-default">
                      <Tooltip content={key} top>
                        {key}
                      </Tooltip>
                      :
                    </Title>
                    <p className="cursor-text">{companyFundamentals[key]}</p>
                  </div>
              ),
            )}
          </div>
        </motion.div>
      )}
    </DashboardLayout>
  );
}

export default Stock;
