import axios from 'axios';
import { getSession } from 'next-auth/react';
import { useCallback, useState, useEffect } from 'react';
import { useMutation } from 'react-query';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import Button from '../../components/ui/Button/Button';
import Title from '../../components/ui/Title';

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
  const [searchTerm, setSearchTerm] = useState('');
  const [series, setSeries] = useState<
    [{ data: { x: string; y: string[] }[] }]
  >([{ data: [] }]);
  const [options, setOptions] = useState<ApexOptions>({
    chart: {
      height: 350,
      type: 'candlestick',
    },
    title: {
      text: `${searchTerm} Stock Price Chart`,
      align: 'left',
    },
    tooltip: {
      enabled: true,
    },
    xaxis: {
      type: 'category',
      labels: {
        formatter(val) {
          return val;
        },
      },
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  });

  const {
    isLoading, isIdle, isError, data, error, mutate,
  }: any = useMutation(
    'search',
    async (searchTerm: string) => {
      const response = await axios.get(
        `http://localhost:3000/api/overview?search=${searchTerm}`,
      );
      if (!response.data) {
        throw new Error('Network response was not ok');
      }
      return response.data;
    },
  );

  useEffect(() => {
    if (data) {
      for (const key in data?.data_daily['Time Series (Daily)']) {
        series[0].data.push({
          x: key,
          y: [
            data?.data_daily['Time Series (Daily)'][key]['1. open'],
            data?.data_daily['Time Series (Daily)'][key]['2. high'],
            data?.data_daily['Time Series (Daily)'][key]['3. low'],
            data?.data_daily['Time Series (Daily)'][key]['4. close'],
          ],
        });
      }
    }
  }, [data]);

  const updateSearchTerm = useCallback(
    (e) => {
      setSearchTerm(e.target.value);
    },
    [searchTerm],
  );

  return (
    <DashboardLayout user={user} title="Overview">
      <form>
        <input
          onChange={(e) => updateSearchTerm(e)}
          className="my-5 bg-gray-200 border border-black border-1 rounded-md focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
          type="text"
          placeholder="AAPL"
        />
        <Button
          variant="primary"
          onClick={() => mutate(searchTerm)}
          type="submit"
        >
          Search
        </Button>
      </form>
      {isLoading ? null : (
        <>
          {isError && (
            <span className="text-red-500">
              Error:
              {error.message}
            </span>
          )}
          {data && series.length > 0 && (
            <>
              <Title type="h1">
                {data?.Name}
                {' '}
                Overview:
              </Title>
              {/* <ReactApexChart options={options} series={series} type="candlestick" width="100%" /> */}
              <div className="grid grid-cols-2">
                {data.data
                  && Object.keys(data.data).map((key) => (
                    <div className="grid grid-cols-2" key={key}>
                      <Title type="h4">{key}</Title>
                      <p>{data.data[key]}</p>
                    </div>
                  ))}
              </div>
            </>
          )}
        </>
      )}
    </DashboardLayout>
  );
}

export default Overview;
